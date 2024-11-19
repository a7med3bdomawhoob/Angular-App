import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-leadership',
  templateUrl: './our-leadership.component.html',
  styleUrls: ['./our-leadership.component.scss']
})
export class OurLeadershipComponent implements OnInit {

  EngAlaa = '../../../assets/Images/Eng-Alaa.png';

  constructor() { }


  infovisible = false;

  showInfo() {
    this.infovisible = true;
  }

  hideInfo() {
    this.infovisible = false;
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
