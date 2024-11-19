import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Route, Router } from '@angular/router';
import { AreaServicesService } from 'src/app/area-services.service';
import { NamaaServicesService } from 'src/app/SevicesFolder/namaa-services.service';
import { ServicesServiceService } from 'src/app/SevicesFolder/services-service.service';

@Component({
  selector: 'app-service-exmaple',
  templateUrl: './service-exmaple.component.html',
  styleUrls: ['./service-exmaple.component.scss']
})
export class ServiceExmapleComponent implements OnInit {

  allProjects(areaId: any) {
    console.log('all-projects');
    console.log(areaId);
    // this.route.navigate(['/all-projects']);
    this.route.navigate([`/area`, areaId]);  // Navigate to /area/:areaId

  }

  constructor(private el: ElementRef, private renderer: Renderer2,
    private service: ServicesServiceService, private route: Router,
    private namaa: NamaaServicesService, private area: AreaServicesService, private sanitizer: DomSanitizer) {




  }
  DataTransferFromMainToExample: any = null;

  DataTransferFromMainToExampleFromLocalStorage: any;



  images: SafeUrl[] = [];  // Use SafeUrl to store sanitized URLs
  sanitizeImage(image: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(image);
  }

  ImagesNamesFromObject: string = '';

  ConcateImagesNames(obj: any) {
    this.ImagesNamesFromObject = obj.map((item: any) => item.area_Image).join(',');
    console.log(this.ImagesNamesFromObject);
  }


  loadImages(): void {   //Show Images
    console.log(this.images);
    console.log(this.DataTransferFromMainToExample);
    this.ConcateImagesNames(this.DataTransferFromMainToExample);


    console.log(this.ImagesNamesFromObject);
    console.log(this.ImagesParameter);
    // const imageNames = "1.jfif,2.jpg"; // Example image names work
    //const imageNames = "R.jfif,f.jfif,2.jpg"; // Example image names
    const imageNames = this.ImagesNamesFromObject; // Example image names

    this.area.GetImagesForAreaByImagesString(imageNames).subscribe(
      (res: string[]) => {
        this.images = res.map(image => this.sanitizeImage(image));
        console.log(this.images);

        // Assuming this.images contains raw strings, and you're sanitizing them for use in Angular templates
        this.DataTransferFromMainToExample = this.DataTransferFromMainToExample.map((area: any, index: any) => {
          return {
            ...area,
            imageUrl: this.images[index] // Assuming images[index] is already a string and trusted
          };
        });

        console.log(this.images[0]);


        console.log(this.DataTransferFromMainToExample);



      },
      error => {
        console.error('Error fetching images', error);
      }
    );






  }


  //images: string[] = [];

  // loadImages(): void {
  //   const imageNames = "1.jfif,2.jpg"; // Example image names
  //   this.area.GetImagesForAreaByImagesString(imageNames).subscribe((res) => {
  //     console.log(res);
  //     this.images =res;
  //   },
  //   error => {
  //     console.error('Error fetching images', error);
  //   }
  // );
  // }

  AllObject: any;

  Service_Name: any;
  Service_Description: any;

  Service_Name_ar: any;
  Service_Description_ar: any;

  ServiceId: any;

  ServiceData: any;
  ImageNameOfService: any;

  GetServiceByServiceId() {
    this.service.GetServiceByServiceId(this.ServiceId).subscribe((res) => {
      console.log(res);
      this.ServiceData = res;
      this.ImageNameOfService = this.ServiceData[0].service_Image;
      console.log(this.ImageNameOfService);
      this.GetImageOfServiceByImageName();
    });
  }

  ServiceImage: SafeUrl[] = [];
  GetImageOfServiceByImageName() {
    this.service.GetImageOfServiceByImageName(this.ImageNameOfService).subscribe((res: string[]) => {
      console.log(res);

      this.ServiceImage = res.map(res => this.sanitizeImage(res));
      console.log(this.ServiceImage);
    });
  }
  ImagesParameter: any;
  i: any;
  AreaDataByServiceId: any;
  ImgbaseUrl: any;

  lang: any;
  GetLang() {
    this.lang = localStorage.getItem("lang");
    console.log(this.lang);
  }


      /////////////////  when deploy img not appeare new Problem Solved 
      getSanitizedImageUrl(pro: any): SafeUrl {
        const fullUrl = `${this.ImgbaseUrl}Areas/${pro.area_Image}`;
        return this.sanitizer.bypassSecurityTrustUrl(fullUrl);
      }
      ////////////////

      

  ngOnInit(): void {
    this.GetLang();
    this.ImgbaseUrl = this.namaa.imgbaseurl;

    this.ImagesParameter = '';
    this.ImagesNamesFromObject = '';

    this.ServiceId = localStorage.getItem("ServiceId");
    console.log(this.ServiceId);


    this.area.GetAreaInfoByServiceId(this.ServiceId).subscribe(
      (res) => {
        console.log(res);
        this.AreaDataByServiceId = res;

        // Use map and join for cleaner code
        this.ImagesParameter = this.AreaDataByServiceId
          .map((item: { area_Image: any; }) => item.area_Image)  // Extract image names
          .join(',');  // Join them with commas

        console.log(this.ImagesParameter);
        console.log(this.AreaDataByServiceId);

        console.log(this.AreaDataByServiceId[0].areaId);
        this.ConcateImagesNames(this.AreaDataByServiceId);

        this.area.GetImagesForAreaByImagesString(this.ImagesParameter).subscribe(
          (res: string[]) => {
            this.images = res.map(image => this.sanitizeImage(image));
            console.log(this.images);
          });



        // Any additional processing or actions can be done here

      },
      (error) => {
        // Handle error cases
        console.error('Error fetching area info:', error);
      }
    );


    this.GetServiceByServiceId();

    this.namaa.MainServiceToExampleServiceData.subscribe((res) => {
      console.log(res);
      this.AllObject = res;
      this.DataTransferFromMainToExample = this.AllObject;
      console.log(this.DataTransferFromMainToExample);
      /////////////////////////

      console.log(this.ImagesNamesFromObject);
      //  ImagesNamesFromObject
      ////////////////////////



      if (res != null) {
        this.DataTransferFromMainToExample = res;
      }

    });

    this.DataTransferFromMainToExampleFromLocalStorage = localStorage.getItem("MainserviceToExambleArray");
    this.DataTransferFromMainToExample = (JSON.parse(this.DataTransferFromMainToExampleFromLocalStorage));
    console.log(this.DataTransferFromMainToExample);


    this.Service_Description = localStorage.getItem("Service_Description");
    this.Service_Name = localStorage.getItem("Service_Name");

    this.Service_Description = localStorage.getItem("Service_Description_ar");
    this.Service_Name = localStorage.getItem("Service_Name_ar");


    console.log(this.Service_Description);
    console.log(this.Service_Name);

    console.log(this.Service_Description_ar);
    console.log(this.Service_Name_ar);


  }








}
