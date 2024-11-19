import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NamaaServicesService {


  baseUrl: string = "https://localhost:44301/api/";
  imgbaseurl:string="https://localhost:44301/";

  //////////////////////////////

  // baseUrl: string = "  http://192.168.10.6:8070/api/";
  // imgbaseurl:string="  http://192.168.10.6:8070/";







  constructor(private http: HttpClient) {

  }




  private dataSubject = new BehaviorSubject<any>(localStorage.getItem("ProjectDtails"));  //Default Because When Refresh  ProjectDtails
  data$ = this.dataSubject.asObservable();

  updateData(data: any) {
    this.dataSubject.next(data);   //project_examble
  }

  Check: boolean = false;



  ///////////////////////////////////////////////////
  private TransferMainServiceToSeviceExample = new BehaviorSubject<any>([]);
  MainServiceToExampleServiceData = this.TransferMainServiceToSeviceExample.asObservable();

  MainToExamble(data: any) {
    this.TransferMainServiceToSeviceExample.next(data);
  }

  ///////////////////////////
}


