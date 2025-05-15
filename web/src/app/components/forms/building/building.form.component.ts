import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';

//To use forms 
//  Import in the imports on the component the following
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from "@angular/material/input";//angular material must be installed before
import { MatTooltip } from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';

//To use the controls in the component
import {FormControl} from '@angular/forms';
import {FormGroup, Validators} from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { ServerAnswerModel } from '../../../models/serverAnswer.model';

@Component({
  selector: 'app-building',
  standalone: true,
  imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatTooltip, MatButtonModule,
    MatCardModule
  ],
  templateUrl: './building.form.component.html',
  styleUrl: './building.form.component.scss'
})
export class BuildingFormComponent {
  serverMessage = '';
  //Form component creation
  id = new FormControl('');
  description =  new FormControl('', [Validators.required]);
  area = new FormControl('', [Validators.required,Validators.minLength(2)]);
  geom = new FormControl('', [Validators.required,Validators.minLength(10)]);

  //Create a form group to eval the data at once
  controlsGroup = new FormGroup({
    id: this.id,
    description: this.description,
    area: this.area,
    geom: this.geom
  })

  constructor(private apiService:ApiService){}

  insert(){
    this.serverMessage='';
    console.log(this.controlsGroup.valid)
    console.log(this.controlsGroup.value)
    this.apiService.post('buildings/buildings_view/insert/',this.controlsGroup.value).subscribe({

      next: response => {
        console.log('response',response)
      },
      error:error=>{
        console.log(error.description)
      }
    })//subscribe
  }
  select(){
    this.serverMessage='';
    console.log(this.controlsGroup.value)
    if (!this.id.value){
      console.log('Put an id');
      return;
    }
    this.apiService.get('buildings/buildings_view/selectone/' + this.id.value + '/').subscribe({
      next: (response: ServerAnswerModel) => {
        console.log('response',response)
        console.log('response.data',response.data)
    
      },
      error:error=>{
        console.log(error.description)
      }
    })//subscribe
  }

  selectAll(){
    this.serverMessage='';
    this.apiService.get('buildings/buildings_view/selectall/').subscribe({

      next: response => {
        console.log('response',response)
      },
      error:error=>{
        console.log(error.description)
      }
    })//subscribe
  }

}
