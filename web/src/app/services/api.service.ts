import { Injectable } from '@angular/core';

//To be able to set http requests
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public settingsService:SettingsService, private httpClient:HttpClient) { }

  get(endPointUrl:string, getParams:HttpParams=new HttpParams({})){
    return this.httpClient.get<any>(this.settingsService.API_URL + endPointUrl,
      {
        headers: {}, responseType : 'json', reportProgress: false,
        params: getParams
      })
  }

  post(endPointUrl:string, postParams:{}={}){
      return this.httpClient.post<any>(
        this.settingsService.API_URL + endPointUrl,
        postParams,
        {headers: {}, responseType : 'json', reportProgress: false})
  }
}

