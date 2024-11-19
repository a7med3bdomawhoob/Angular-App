import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brief-about-us',
  templateUrl: './brief-about-us.component.html',
  styleUrls: ['./brief-about-us.component.scss']
})
export class BriefAboutUsComponent implements OnInit {

  constructor(private router: Router) { }

  GoToAbout() {
    this.router.navigate(['/Who-We-Are']);
  }

  MainServices() {
    this.router.navigate(['/main-services']);
  }

  articleText: string = `Lim venptt cillum dolore eu fugiat nuui officia deserunm.`;





  lang: any;
  GetLang() {
    this.lang = localStorage.getItem("lang");
    console.log(this.lang);
  }
  ngOnInit(): void {
    this.GetLang();
  }

}
