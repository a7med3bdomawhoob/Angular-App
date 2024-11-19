import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NamaaServicesService } from 'src/app/SevicesFolder/namaa-services.service';
import { ProjectServiceService } from 'src/app/SevicesFolder/project-service.service';

@Component({
  selector: 'app-project-examble-for-area',
  templateUrl: './project-examble-for-area.component.html',
  styleUrls: ['./project-examble-for-area.component.scss']
})
export class ProjectExambleForAreaComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer, private projectservice: ProjectServiceService, private namaa: NamaaServicesService, private router: Router, private route: ActivatedRoute) { }

  client_Name :any;
  location :any;
  projectId :any;
  project_Description :any;
  project_Description_ar :any;
  project_Name:any;
  project_Name_ar:any;

  ////////////////////////////
  Project_Id: any;
  ProjectData: any;
  Image_Name: any;
  GetProjectByProjectId() {
    this.projectservice.GetProjectByProjectId(this.Project_Id).subscribe((res) => {
      console.log(res);
      this.ProjectData = res;
      this.Image_Name = this.ProjectData["image_Name"];
      console.log(this.Image_Name);
      this.GetImageByImageName();

      this.Image_Name = this.Image_Name;
      this.client_Name =this.ProjectData["client_Name"];
      this.location =this.ProjectData. location;
      this.projectId =this.ProjectData. projectId;
      this.project_Description =this.ProjectData. project_Description;
      this.project_Description_ar =this.ProjectData. project_Description_ar;
      this.project_Name =this.ProjectData. project_Name;
      this.project_Name_ar =this.ProjectData. project_Name_ar;
  
      console.log(this.project_Description);

      
    });

  
  }
  /////////////////////////////


RealImage:SafeUrl[]=[];
sanitizeImage(image: string): SafeUrl {
  return this.sanitizer.bypassSecurityTrustUrl(image);
}


ReturnToProjectPage(){
  this.router.navigate(['/all-projects'])
}


  GetImageByImageName() {
    this.projectservice.GetImageByImageName(this.Image_Name).subscribe((res) => {
      console.log(res);
     // this.RealImage=res;
      this.RealImage = res.map((image: any) => this.sanitizeImage(image));
      console.log(this.RealImage);
    });
  }
  lang:any;
  GetLang() {
    this.lang = localStorage.getItem("lang");
    console.log(this.lang);
  }

  ImgbaseUrl:any;
    /////////////////  when deploy img not appeare new Problem Solved 
    getSanitizedImageUrl(pro: any): SafeUrl {
      const fullUrl = `${this.ImgbaseUrl}Projects/${pro.image_Name}`;
      return this.sanitizer.bypassSecurityTrustUrl(fullUrl);
    }
    ////////////////


  ngOnInit(): void {
    this.GetLang();
    this.ImgbaseUrl = this.namaa.imgbaseurl;
    this.route.paramMap.subscribe(params => {
      this.Project_Id = params.get('projectid'); // Get the 'id' parameter from the route
      // Now you can use this id to fetch data or perform other operations
      console.log(this.Project_Id);
    });


    this.GetProjectByProjectId();



  }




}
