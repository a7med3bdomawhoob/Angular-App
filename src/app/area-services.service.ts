import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NamaaServicesService } from './SevicesFolder/namaa-services.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaServicesService {
  baseUrl:any="https://localhost:44301/api/";
  constructor(
    private http: HttpClient,private service:NamaaServicesService

  ) {}


  GetImagesForAreaByImagesString(imagesName:any): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}Area/GetImagesForAreaByImagesString?imageNames=${imagesName}`);
 }


 GetAreaInfoByServiceId(id:any): Observable<string[]> {
  return this.http.get<string[]>(`${this.baseUrl}Area/GetAreaInfoByServiceId?serviceId=${id}`);
}




 



}
