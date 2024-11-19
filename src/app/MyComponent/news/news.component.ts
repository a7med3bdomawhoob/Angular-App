import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NewsServService } from 'src/app/SevicesFolder/news-serv.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private router: Router, private news: NewsServService, private sanitizer: DomSanitizer) { }

  isDown: any;
  startX: any;
  ///////////////////////////////////////
  NewsInfo: any;
  NewsImages: SafeUrl[] = [];  // Use SafeUrl to store sanitized URLs
  sanitizeImage(image: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(image);
  }


  GetAllNewsInfo() {
    this.news.GetAllNewsInfo().subscribe((res) => {
      console.log(res);
      this.NewsInfo = res;
      this.GetAllNewsImages();
    });
  }


  GetAllNewsImages() {
    this.news.GetAllNewsImages().subscribe((res) => {
      console.log(res);
      this.NewsImages = res.map((image: any) => this.sanitizeImage(image));
      console.log(this.NewsImages);
    });
  }

  ShowNews(ImgId:any) {
    console.log(ImgId);
    console.log("Show");  
    // this.router.navigate(["/news-page"]);
    this.router.navigate(['/news-description',ImgId]);
  }

  ///////////////////////////


  @ViewChild('slider') slider!: ElementRef;

  ngAfterViewInit() {
    const slider = this.slider.nativeElement;

    slider.addEventListener('mousedown', (e: MouseEvent) => {
      this.isDown = true;
      slider.classList.add('active');
      this.startX = e.pageX - slider.offsetLeft;
      this.scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
      this.isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
      this.isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e: MouseEvent) => {
      if (!this.isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - this.startX) * 3; // Adjust the speed of scrolling
      slider.scrollLeft = Number(this.scrollLeft) - walk;
    });
  }

  scrollLeft() {
    const slider = this.slider.nativeElement;
    slider.scrollBy({
      left: -250, // Adjust this value to control how much to scroll
      behavior: 'smooth'
    });
  }

  scrollRight() {
    const slider = this.slider.nativeElement;
    slider.scrollBy({
      left: 250, // Adjust this value to control how much to scroll
      behavior: 'smooth'
    });
  }



  lang:any;
  GetLang() {
    this.lang = localStorage.getItem("lang");
    console.log(this.lang);
  }





  ngOnInit(): void {
    this.GetLang();
    this.GetAllNewsInfo();
  }





    

}
