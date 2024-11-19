import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-governance',
  templateUrl: './new-governance.component.html',
  styleUrls: ['./new-governance.component.scss']
})
export class NewGovernanceComponent implements OnInit {


  isListVisible = false; // Initial visibility state




  toggleList() {
    this.isListVisible = !this.isListVisible; // Toggle the visibility
  }


  isListVisible2 = false; // Initial visibility state

  toggleList2() {
    this.isListVisible2 = !this.isListVisible2; // Toggle the visibility
  }

  isListVisible3 = false; // Initial visibility state

  toggleList3() {
    this.isListVisible3 = !this.isListVisible3; // Toggle the visibility
  }

  isListVisible4 = false; // Initial visibility state

  toggleList4() {
    this.isListVisible4 = !this.isListVisible4; // Toggle the visibility
  }

  defaultImage = '../../../assets/Images/dropdown-icon.svg';
  clickedImage = '../../../assets/Images/dropdown-opened-list-icon.svg';
  currentImage = this.defaultImage;




  flipArrow() {
    this.currentImage = this.clickedImage;
  }
  reFlipArrow() {
    this.currentImage = this.defaultImage;
  }

  flipArrow2() {
    this.currentImage = this.clickedImage;
  }
  reFlipArrow2() {
    this.currentImage = this.defaultImage;
  }

  flipArrow3() {
    this.currentImage = this.clickedImage;
  }
  reFlipArrow3() {
    this.currentImage = this.defaultImage;
  }

  flipArrow4() {
    this.currentImage = this.clickedImage;
  }

  reFlipArrow4() {
    this.currentImage = this.defaultImage;
  }

  constructor(private router: Router) { }

  lang:any;
  GetLang() {
    this.lang = localStorage.getItem("lang");
    console.log(this.lang);
  }
  ngOnInit(): void {
    this.GetLang();
  }

}
