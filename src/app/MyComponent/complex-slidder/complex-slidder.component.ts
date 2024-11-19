import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complex-slidder',
  templateUrl: './complex-slidder.component.html',
  styleUrls: ['./complex-slidder.component.scss']
})
export class ComplexSlidderComponent implements OnInit {

  constructor(private router:Router) { }

  GoToAbout() {
    this.router.navigate(['/Equipment']);
  }

  articleText: string = `Lim venptt cillum dolore eu ddddddddddddddddddddddddddddddddddddddddunm.`;


  lang:any;

  GetLang() {
    this.lang = localStorage.getItem("lang");
    console.log(this.lang);
  }
  ngOnInit(): void {
    this.GetLang();
  }

}
