import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NamaaServicesService } from './namaa-services.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {
  [x: string]: any;

  constructor(
    private http: HttpClient, private service: NamaaServicesService

  ) { }

  baseUrl: any = this.service.baseUrl;



  // GetImage(fileName: string): Observable<Blob> {
  //   return this.http.get(`${this.baseUrl}Project/GetImage?fileName=${fileName}`, { responseType: 'blob' });
  // }



    GetProjectByProjectId(pid:any): Observable<any> {
    return this.http.get<string[]>(`${this.baseUrl}Project/GetProjectByProjectId?projectId=${pid}`);
  }


    GetAllProjects(): Observable<any> {
    return this.http.get<string[]>(`${this.baseUrl}Project/GetAllProjects`);
  }


  GetImage(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}Project/GetImage`);
    //return this.http.get<{ Name: string; Data: string }[]>(`${this.baseUrl}Project/GetImage`);
  }

  GetProjectByImageName(ImageName: any): Observable<any> {
    return this.http.get<string[]>(`${this.baseUrl}Project/GetProjectByImageName?ImageName=${ImageName}`);
  }

  GetProjectByAreaId(areaId: any): Observable<any> {
    return this.http.get<string[]>(`${this.baseUrl}Project/GetProjectByAreaId?areaId=${areaId}`);
  }

  GetProjectsImagesByAreaId(ImagesString:any): Observable<any> {
    return this.http.get<string[]>(`${this.baseUrl}Project/GetProjectsImagesByAreaId?imageNames=${ImagesString}`);
  }
  GetImageByImageName(ImageName: any): Observable<any> {
    return this.http.get<string[]>(`${this.baseUrl}Project/GetImageByImageName?imageNames=${ImageName}`);
  }

  GetAreaByAreaId(id: any): Observable<any> {
    return this.http.get<string[]>(`${this.baseUrl}Area/GetAreaByAreaId?areaId=${id}`);
  }
  
  
}
