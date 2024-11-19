import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NamaaServicesService } from './namaa-services.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesServiceService {

  constructor(
    private http: HttpClient,private service:NamaaServicesService

  ) {}



  baseUrl:any=this.service.baseUrl;


  GetAllServices():Observable<any>
  {
    return this.http.get(`${this.baseUrl}Srvice/GetAllServices`);
  }


  GetImages():Observable<any>
  {
    return this.http.get(`${this.baseUrl}Srvice/GetImages`);
  }

  
  GetImageOfServiceByImageName(fileName:any):Observable<any>
  {
    return this.http.get(`${this.baseUrl}Srvice/GetImageOfServiceByImageName?fileName=${fileName}`);
  }
  
  GetServiceByServiceId(sid:any):Observable<any>
  {
    return this.http.get(`${this.baseUrl}Srvice/GetServiceByServiceId?sid=${sid}`);
  }
  
  

  

}
