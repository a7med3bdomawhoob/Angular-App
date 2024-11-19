import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NamaaServicesService } from './namaa-services.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipementSService {

  constructor(
    private http: HttpClient,private service:NamaaServicesService

  ) {}



  baseUrl:any=this.service.baseUrl;


  GetAllEquipment():Observable<any>
  {
    return this.http.get(`${this.baseUrl}Equipements/GetAllEquipment`);
  }


  GetImages():Observable<any>
  {
    return this.http.get(`${this.baseUrl}Equipements/GetImages`);
  }


  GetImageOfEquipementByImageName(fileName:any):Observable<any>
  {
    return this.http.get(`${this.baseUrl}Equipements/GetImageOfEquipementByImageName?fileName=${fileName}`);
  }

  GetEquipementByEquipementId(sid:any):Observable<any>
  {
    return this.http.get(`${this.baseUrl}Equipements/GetEquipementByEquipementId?eid=${sid}`);
  }


}
