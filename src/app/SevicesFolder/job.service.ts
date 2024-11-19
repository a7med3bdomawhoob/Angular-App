import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {



  baseUrl: any = "https://localhost:44301/api/";


  constructor(private http: HttpClient) {

  }

  GetAllJobs(): Observable<any> {
    return this.http.get<string[]>(`${this.baseUrl}Jobs/GetAllJobs`);
  }

  GetJobByJobId(id:any): Observable<any> {
    return this.http.get<string[]>(`${this.baseUrl}Jobs/GetJobByJobId?JobId=${id}`);
  }

  GetDetailsByJobId(id:any): Observable<any> {
    return this.http.get<string[]>(`${this.baseUrl}Jobs/GetDetailsByJobId?JobId=${id}`);
  }


  SearshByNme( name:string,  Property:string): Observable<any> {
    return this.http.get<string[]>(`${this.baseUrl}Jobs/SearshByNme?name=${name}&Property=${Property}`);
  }
    SearchByAll( JobTitle:string,  Location:string,TimeType:any): Observable<any> {
    return this.http.get<string[]>(`${this.baseUrl}Jobs/SearchByAll?JobTitle=${JobTitle}&Location=${Location}&TimeType=${TimeType}`);
  }
  




  
}
