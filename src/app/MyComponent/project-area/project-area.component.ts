import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NamaaServicesService } from 'src/app/SevicesFolder/namaa-services.service';
import { ProjectServiceService } from 'src/app/SevicesFolder/project-service.service';

@Component({
  selector: 'app-project-area',
  templateUrl: './project-area.component.html',
  styleUrls: ['./project-area.component.scss']
})
export class ProjectAreaComponent implements OnInit {
  GoToProjectExample() {
    console.log("project-example");
    this.router.navigate(['/project-example']);
  }

  //////////////////////////
  ImageDetails(proid: any) {
    console.log(proid);

    this.router.navigate([`/ProjetcExArea/${proid}`]);    //must be on module
  }


  ImgbaseUrl: string = "";

  //////////////////////////////////

  AreaId: any = null;
  constructor(private router: Router, private sanitizer: DomSanitizer, private projectservice: ProjectServiceService, private namaa: NamaaServicesService, private activeroute: ActivatedRoute) {
    this.AreaId = this.activeroute.snapshot.paramMap.get('areaId');  // Retrieve the areaId
    console.log(this.AreaId);

  }
  ImagesParameter: any;
  ProjectData: any;
  ImagesString: string = '';
  GetProjectByAreaId() {
    this.projectservice.GetProjectByAreaId(this.AreaId).subscribe((res) => {
      console.log(res);
      this.ProjectData = res;
      for (let i = 0; i < this.ProjectData.length; i++) {
        this.ImagesString += this.ProjectData[i].image_Name + ',';
      }
      this.ImagesParameter = this.ImagesString.slice(0, -1);
      console.log(this.ImagesParameter);
      this.GetProjectsImagesByAreaId();
    });


  }

  Images: any;



  GetProjectsImagesByAreaId() {
    console.log(this.ImagesParameter);
    this.projectservice.GetProjectsImagesByAreaId(this.ImagesParameter).subscribe((res) => {
      console.log(res);
      //  this.Images=res;


      // Sanitize each image URL before assigning it to the Images array
      this.Images = res.map((image: any) => this.sanitizeImage(image));
    });
  }


  images: SafeUrl[] = [];  // Use SafeUrl to store sanitized URLs
  sanitizeImage(image: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(image);
  }

  ImagesNamesFromObject: string = '';

  ConcateImagesNames(obj: any) {
    this.ImagesNamesFromObject = obj.map((item: any) => item.image_Name).join(',');
    console.log(this.ImagesNamesFromObject);

  }

  AreaInfo: any;

  GetAreaByAreaId() {
    console.log(this.AreaId);
    this.projectservice.GetAreaByAreaId(this.AreaId).subscribe((res) => {
      console.log(res);
      this.AreaInfo = res;
    })
  }




  lang: any;
  GetLang() {
    this.lang = localStorage.getItem("lang");
    console.log(this.lang);
  }

  /////////////////  when deploy img not appeare new Problem Solved 
  getSanitizedImageUrl(pro: any): SafeUrl {
    const fullUrl = `${this.ImgbaseUrl}Projects/${pro.image_Name}`;
    return this.sanitizer.bypassSecurityTrustUrl(fullUrl);
  }
  ////////////////


  ngOnInit(): void {
    this.GetLang();
    this.ImgbaseUrl = this.namaa.imgbaseurl;
    // this.baseUrl="https://localhost:44301/";
    console.log(this.ImgbaseUrl);

    this.GetProjectByAreaId();

    this.GetAreaByAreaId();

  }


}
