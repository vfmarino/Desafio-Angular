import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders} from '@angular/common/http';
import { Cervejas } from '../model/cervejas';

@Injectable({
  providedIn: 'root'
})
export class CervejaServiceService {

  private url= '/assets/bancoDeCevejas.json';

  HttpOptions ={
    Headers: new HttpHeaders({'content-type':'aplicantion.json'})
  }
  constructor(private http:HttpClient) { }

  getCerveja(){
    return this.http.get(this.url);
  }

}
