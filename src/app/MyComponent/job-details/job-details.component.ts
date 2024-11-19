import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/SevicesFolder/job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

  constructor(private job: JobService,private route:ActivatedRoute) { }

  
  jobId: any;
  DetailedInfo:any;
  Responsibilities:any=null;
  Requirements:any=null;
//////////////////
  getRes(responsibility: any, index: number): string {
    return responsibility[`res${index + 1}`];  // Accessing res1, res2, res3, etc.
  }

  getTotalResCount(responsibility: any): number {
    // You can modify this logic based on the actual number of 'res' properties
    return Object.keys(responsibility).length; // Returns total count of properties
  }
///////////////////
getReq(requirement: any, index: number): string {
  return requirement[`req${index + 1}`];  // Accessing req1, req2, req3, etc.
}

getTotalReqCount(requirement: any): number {
  // Adjust this logic based on how many 'req' properties you have
  return Object.keys(requirement).length; // Returns the total count of req properties
}
//////////////////////////

  GetDetailsByJobId() {
    this.job.GetDetailsByJobId(this.jobId).subscribe((res) => {
      console.log(res);
      this.DetailedInfo=res;
      this.Responsibilities= this.DetailedInfo.jobResponsibilities
      console.log(this.Responsibilities);
      this.Requirements= this.DetailedInfo.jobRequirements;
      console.log(this.Requirements);
    });
  }



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.jobId = +params['JobId']; // The '+' converts the string to a number
      console.log(this.jobId);
    });
    this.GetDetailsByJobId();



  }

}
