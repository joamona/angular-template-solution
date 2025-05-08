import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

//To use forms 
//  Import in the imports on the component the following
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from "@angular/material/input";//angular material must be installed before
import { MatTooltip } from '@angular/material/tooltip';
//To use the controls in the component
import {FormControl} from '@angular/forms';
import {FormGroup, Validators} from '@angular/forms';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-building',
  standalone: true,
  imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatTooltip],
  templateUrl: './building.component.html',
  styleUrl: './building.component.scss'
})
export class BuildingComponent {

  //Form component creation
  id = new FormControl('');
  description =  new FormControl('', [Validators.required]);
  area = new FormControl('', [Validators.required,Validators.minLength(2)]);
  geom = new FormControl('', [Validators.required,Validators.minLength(10)]);

  //Create a form group to eval the data at once
  controlsGroup = new FormGroup({
    username: this.id,
    password: this.description,
    passwordFormControl2: this.area,
    data_acceptation: this.geom
  })

  constructor(private apiService:ApiService){}

  insert(){
    console.log(this.controlsGroup.valid)
    console.log(this.controlsGroup.value)
    this.apiService.post('buildings/buildings/insert/',this.controlsGroup.value).subscribe({

      next: response => {
        console.log('response',response)
      },
      error:error=>{
        console.log(error.description)
      }
    })//subscribe
  }
  select(){
    console.log(this.controlsGroup.value)
    if (!this.id.value){
      console.log('Put an id');
      return;
    }
    this.apiService.get('buildings/buildings/select/' + this.id.value + '/').subscribe({

      next: response => {
        console.log('response',response)
      },
      error:error=>{
        console.log(error.description)
      }
    })//subscribe
  }

}
