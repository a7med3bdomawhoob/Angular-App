import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NamaaServicesService } from 'src/app/SevicesFolder/namaa-services.service';
import { ProjectServiceService } from 'src/app/SevicesFolder/project-service.service';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss']
})
export class AllProjectsComponent implements OnInit {

  GoToProjectExample() {
    console.log("project-example");
    this.router.navigate(['/project-example']);
  }

  constructor(private router: Router, private sanitizer: DomSanitizer, private projectservice: ProjectServiceService, private namaa: NamaaServicesService) { }


  // imageUrls: any;
  // GetImage() {

  //   this.projectservice.GetImage().subscribe(images => {
  //     this.imageUrls = images;
  //   });
  //   console.log(this.imageUrls);
  // }



  imageUrls: SafeUrl | any;
  GetImage() {
    this.projectservice.GetImage().subscribe(images => {
      // Sanitize each image URL
      this.imageUrls = images.map((image: string) => this.sanitizeUrl(image));
      console.log(images);
      console.log(this.imageUrls);
    });

  }

  sanitizeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ImageName: any;
  ProjectDtails: any = {};
  GetProjectByImageName() {
    this.projectservice.GetProjectByImageName(this.ImageName).subscribe((res) => {
      console.log(res);
      this.ProjectDtails = res;
      this.namaa.updateData(this.ProjectDtails);  //SendData
      localStorage.setItem("ProjectDtails", JSON.stringify(this.ProjectDtails));

    });


  }




  // ImageDetails(e: any) {
  //   console.log(e);
  //   const srcValue = e.target.src;
  //   console.log(srcValue);
  //   const extractedPart = srcValue.split(':')[1].split(';')[0];
  //   this.ImageName = extractedPart;
  //   this.ImageName = extractedPart;
  //   console.log(this.ImageName);
  //   this.GetProjectByImageName();
  //   // const data = this.ProjectDtails;
  //   this.router.navigate([`/project-example/${this.ImageName}`]);    //must be on module
  // }




  // ImageDetails(e: any) {
  //   console.log(e);
  //   const srcValue = e.target.src;
  //   console.log(srcValue);
  //    this.ImageName = srcValue.split('/').pop(); // Returns "gpr2.jfif";
  //   console.log(this.ImageName);
  //   this.GetProjectByImageName();
  //   // const data = this.ProjectDtails;
  //   this.router.navigate([`/project-example/${this.ImageName}`]);    //must be on module
  // }

  ProId:any;

  ImageDetails(e: any) {
    console.log(e);
    const projectId = e.projectId;
    this.ProId=projectId;
    console.log(projectId);
    this.GetProjectByProjectId();
    this.router.navigate([`/project-example/${projectId}`]);    //must be on module
  }

  GetProjectByProjectId() {
    this.projectservice.GetProjectByProjectId(this.ProId).subscribe((res) => {
      console.log(res);
    });
  }


  AllProject: any;
  GetAllProjects() {
    this.projectservice.GetAllProjects().subscribe((res) => {
      console.log(res);
      this.AllProject = res;
    });
  }




  ImgbaseUrl:any;
  lang:any;
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
this.ImgbaseUrl=this.namaa.imgbaseurl;

/////////////////




////////////////


    // this.GetImage();
    this.GetAllProjects();

  }







}
