import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public API_URL='http://localhost:8888/'
  public GEOSERVER_URL='http://localhost:8080/geoserver/'
  constructor() { }
}
