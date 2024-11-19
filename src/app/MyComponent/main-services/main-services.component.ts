import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AreaServicesService } from 'src/app/area-services.service';
import { NamaaServicesService } from 'src/app/SevicesFolder/namaa-services.service';
import { ServicesServiceService } from 'src/app/SevicesFolder/services-service.service';

@Component({
  selector: 'app-main-services',
  templateUrl: './main-services.component.html',
  styleUrls: ['./main-services.component.scss']
})
export class MainServicesComponent implements OnInit {


  constructor(private router: Router, private areaservice: AreaServicesService, private namaa: NamaaServicesService, private service: ServicesServiceService, private sanitizer: DomSanitizer) { }
  DataTransferFromMainToExample: any = null;

  ServiceId: any;
  ShowServiceId(e: any, description: any, serviceName: any, description_ar: any, serviceName_ar: any) {
    console.log(e);
    localStorage.setItem("ServiceId", e);
    localStorage.setItem("Service_Name", serviceName);
    localStorage.setItem("Service_Description", description);

    localStorage.setItem("Service_Name_ar", serviceName_ar);
    localStorage.setItem("Service_Description_ar", description_ar);


    this.ServiceId = e;
    this.areaservice.GetAreaInfoByServiceId(this.ServiceId).subscribe((res) => {
      console.log(res);
      this.DataTransferFromMainToExample = res;
      this.namaa.MainToExamble(res);
      localStorage.setItem("MainserviceToExambleArray", JSON.stringify(this.DataTransferFromMainToExample));
    });

    this.router.navigate(['/service-example']);




  }

  ServiceData: any;
  GetAllServices() {
    this.service.GetAllServices().subscribe((res: any) => {
      console.log(res);
      this.ServiceData = res;
    });
  }


  ServiceExample() {
    console.log("Service Example");
  }

  ServiceImages: any = [];

  GetImageForService() {
    this.service.GetImages().subscribe((res) => {
      console.log(res);
      this.ServiceImages = res;
    });
  }


  ImageName: any;
  ImageDetails(e: any) {
    const srcValue = e.target.src;
    const extractedPart = srcValue.split(':')[1].split(';')[0];
    this.ImageName = extractedPart;
    this.ImageName = extractedPart;
    console.log(this.ImageName);


    // const data = this.ProjectDtails;


    // this.router.navigate(['/project-example']);    //must be on module

  }


  imageUrls: SafeUrl | any;
  GetImage() {
    this.service.GetImages().subscribe(images => {
      // Sanitize each image URL
      this.imageUrls = images.map((image: string) => this.sanitizeUrl(image));
    });
    console.log(this.imageUrls);
  }

  sanitizeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }




  lang: any;
  ImgbaseUrl: any;
  GetLang() {
    this.lang = localStorage.getItem("lang");
    console.log(this.lang);
  }


    /////////////////  when deploy img not appeare new Problem Solved 
    getSanitizedImageUrl(serviceData: any): SafeUrl {
      const fullUrl = `${this.ImgbaseUrl}Services/${serviceData.service_Image}`;
      return this.sanitizer.bypassSecurityTrustUrl(fullUrl);
    }
    ////////////////
    

  ngOnInit(): void {

    this.GetLang();


    this.ImgbaseUrl = this.namaa.imgbaseurl;
    this.GetAllServices();
    // this.GetImageForService();
    // this.GetImage();
  }




}
