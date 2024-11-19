import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NamaaServicesService } from 'src/app/SevicesFolder/namaa-services.service';
import { ProjectServiceService } from 'src/app/SevicesFolder/project-service.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-project-examble',
  templateUrl: './project-examble.component.html',
  styleUrls: ['./project-examble.component.scss']
})
export class ProjectExambleComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer, private projectservice: ProjectServiceService, private namaa: NamaaServicesService, private router: Router, private route: ActivatedRoute) { }


  data: any;

  ProjectId: any = "";
  client_Name: any;
  location: any;
  projectId: any;
  project_Description: any;
  project_Name: any = "";




  ProjectImage: any;
  images: SafeUrl[] = [];  // Use SafeUrl to store sanitized URLs
  sanitizeImage(image: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(image);
  }

  allprojects() {
    console.log('all-projects');
    this.router.navigate(['/all-projects'])
  }


  ImgbaseUrl: any;
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
    this.ImgbaseUrl = this.namaa.imgbaseurl;


    this.route.paramMap.subscribe(params => {
      this.ProjectId = params.get('ImageName'); // Get the 'id' parameter from the route
      // Now you can use this id to fetch data or perform other operations
      console.log(this.ProjectId);
    });


    this.GetImage();

    this.namaa.data$.subscribe(res => {
      this.data = res;
      console.log(this.data);
      try {
        try {
          this.ProjectId = this.ProjectId;
          this.client_Name = JSON.parse(this.data).client_Name;
          this.location = JSON.parse(this.data).location;
          this.projectId = JSON.parse(this.data).projectId;
          this.project_Description = JSON.parse(this.data).project_Description;
          this.project_Name = JSON.parse(this.data).project_Name;

          console.log(this.ProjectId);

        }

        catch {
          this.ProjectId = this.ProjectId;
          this.client_Name = this.data.client_Name;
          this.location = this.data.location;
          this.projectId = this.data.projectId;
          this.project_Description = this.data.project_Description;
          this.project_Name = this.data.project_Name;
          console.log(this.ProjectId);
        }
      }

      catch {
        console.log("Error");
        this.ProjectId = "";
        this.client_Name = "";
        this.location = "";
        this.projectId = "";
        this.project_Description = "";
        this.project_Name = ""
        console.log(this.ProjectId);
      }
    });

    console.log(this.ProjectId);

    //GetImageByImageName
    this.projectservice.GetImageByImageName(this.ProjectId).subscribe((res) => {
      console.log(res);
      this.ProjectImage = res;
      // Sanitize each image URL before assigning it to the Images array
      this.images = res.map((image: any) => this.sanitizeImage(image));
      console.log(this.images);

    });

  }


  imageUrls: any;
  ProjectInfo: any
  GetProjectByProjectId() {
    this.projectservice.GetProjectByProjectId(this.ProjectId).subscribe((res) => {
      console.log(res);
      this.ProjectInfo = res;
    });
  }


  GetImage() {
    // this.projectservice.GetImage().subscribe(images => {
    //   this.imageUrls = images;
    // });


    this.GetProjectByProjectId();



  }




}
