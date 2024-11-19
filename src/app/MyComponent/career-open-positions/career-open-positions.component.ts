import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Property } from '@syncfusion/ej2/base';

import { JobService } from 'src/app/SevicesFolder/job.service';

@Component({
  selector: 'app-career-open-positions',
  templateUrl: './career-open-positions.component.html',
  styleUrls: ['./career-open-positions.component.scss']
})
export class CareerOpenPositionsComponent implements OnInit {
  constructor(private router: Router, private job: JobService) {


  }


  FilterName: any;
  Propert: any;

  Location: any = null;
  TimeType: any = null;
  JobTitle: any = null;


  Filter(e: any) {
    console.log(e.target.id);
    this.Propert = e.target.id;


    console.log(e.target.value);
    this.FilterName = e.target.value;

    if (this.Propert == "Location") {
      this.Location = this.FilterName;
    }
    else if (this.Propert == "Job_Title") {
      this.JobTitle = this.FilterName;
    }
    else if (this.Propert == "Time_Type") {
      this.TimeType = this.FilterName;
    }

    console.log(this.Location);
    console.log(this.TimeType);
    console.log(this.JobTitle);

    // this.job.SearshByNme(this.FilterName, this.Propert).subscribe((res) => {
    //   console.log(res);
    //   this.JobInfo = res;
    // });
  }

  NoAvailableJobs: boolean = false;

  Apply() {


    this.job.SearchByAll(this.JobTitle, this.Location, this.TimeType).subscribe((res) => {
      console.log(res);
      this.JobInfo = res;
      if (res.length == 0) {
        this.NoAvailableJobs = true;
      }
      else {
        this.NoAvailableJobs = false;
      }
    });

  }

  JobInfo: any;
  JobId: any;

  ShowDes(id: any) {
    this.JobId = id;
    console.log(this.JobId);
    this.router.navigate(["/Job_Description", id]);
  }

  FilterationObject: any;
  GetAllJobs() {
    this.job.GetAllJobs().subscribe((res) => {
      console.log(res);
      this.JobInfo = res;
      this.FilterationObject = res;
    });
  }

  GetJobByJobId() {

  }

  GetDetailsByJobId() {

  }



  selectedContent: string = '';


  showContent(content: string) {
    this.selectedContent = content;
  }




  lang: any;
  GetLang() {
    this.lang = localStorage.getItem("lang");
    console.log(this.lang);
  }
  ngOnInit(): void {
    this.GetLang();
    this.selectedContent = 'open-positions';
    this.GetAllJobs();
    this.NoAvailableJobs = false;

  }


}
