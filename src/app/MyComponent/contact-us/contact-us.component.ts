import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { resetColumns } from '@syncfusion/ej2/grids';
import { EmailService } from 'src/app/SevicesFolder/email-service.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {


  defaultImage = '../../../assets/Images/Mail.svg';
  hoverImage = '../../../assets/Images/White-Mail.svg';
  currentImage = this.defaultImage;

  onMouseOver() {
    this.currentImage = this.hoverImage;
  }

  onMouseOut() {
    this.currentImage = this.defaultImage;
  }

  toEmail: string = '';
  subject: string = '';
  body: string = '';


  First: string = '';
  Last: string = '';
  Phone: string = '';
  Role: string = '';
  Company: string = '';

  CheckEmail:boolean=false;

  constructor(private emailService: EmailService) {

  }


  @ViewChild('emailForm') emailForm!: NgForm;

  sendEmail() {
    // this.emailService.sendEmail(this.toEmail, this.subject, this.body).subscribe(
    this.emailService.sendEmail(
        this.First, this.Last, this.toEmail, this.subject,
        this.body +",\n"+ "Email:" + this.toEmail + ",\n" + "FirstName:" +
        this.First + ",\n" + "LastName:" + this.Last + ",\n" + "Phone:" +
        this.Phone + ",\n" + "Role:" + this.Role + ",\n" + "Company:" +

        this.Company).subscribe(
      () => {
        console.log('Email sent successfully!');
        this.CheckEmail=true;
        this.emailForm.reset();
      },
      (error) => {
        console.error('Error sending email', error);
        this.CheckEmail=false;
      }
    );
  }


//   imageUrl:any;
// GetImage()
// {

//    this.emailService.GetImage("One.png").subscribe(blob => {
//     //this.imageUrl = URL.createObjectURL(blob);
//     const unsafeImgUrl = URL.createObjectURL(blob);
//     this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(unsafeImgUrl);

//   });
// }





lang:any;

GetLang() {
  this.lang = localStorage.getItem("lang");
  console.log(this.lang);
}
ngOnInit(): void {
  this.GetLang();
    this.CheckEmail=false;
  }

}
