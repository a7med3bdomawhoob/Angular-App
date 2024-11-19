import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  AboutUs() {
    console.log("about_us");
    this.router.navigate(['/Who-We-Are']);
  }

  Projects() {
    console.log("projects");
    this.router.navigate(['/all-projects']);
  }

  ContactUs() {
    console.log("contact");
    this.router.navigate(['/contact']);
  }

  GoToCareer() {
    console.log('Career');
    this.router.navigate(['/career-open-positions'])
  }

  lang:any;
  GetLang() {
    this.lang = localStorage.getItem("lang");
    console.log(this.lang);
  }
  ngOnInit(): void {
    this.GetLang();
  }

}
