import { Injectable, forwardRef, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NamaaServicesService } from './namaa-services.service';
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  //private apiUrl = 'https://localhost:44301/api/Email/send'; // Update with your API URL




  constructor(
    private http: HttpClient,private service:NamaaServicesService

  ) {}

  baseUrl:any=this.service.baseUrl;

  sendEmail(First:any,Last:any,toEmail: any, subject: any, body: any): Observable<any> {
    const emailRequest = {First,Last, toEmail, subject, body };
    return this.http.post(this.baseUrl+"Email/send", emailRequest);
  }


  


 
}