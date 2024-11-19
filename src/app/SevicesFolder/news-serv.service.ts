import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NamaaServicesService } from './namaa-services.service';

@Injectable({
  providedIn: 'root'
})
export class NewsServService {
  constructor(
    private http: HttpClient, private service: NamaaServicesService

  ) { }

  baseUrl: any = this.service.baseUrl;


  GetAllNewsImages(): Observable<any> {
    return this.http.get<string[]>(`${this.baseUrl}News/GetAllNewsImages`);
  }

  GetAllNewsInfo(): Observable<any> {
    return this.http.get<string[]>(`${this.baseUrl}News/GetAllNewsInfo`);
  }

  GetNewsByNewsId(id:any): Observable<any> {
    return this.http.get<string[]>(`${this.baseUrl}News/GetNewsByNewsId?NewsId=${id}`);
  }


  GetImageByImageName(imagesName:any): Observable<any> {
    return this.http.get<string[]>(`${this.baseUrl}News/GetImageByImageName?imageNames=${imagesName}`);
  }




}
