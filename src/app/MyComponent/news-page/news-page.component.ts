import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Route, Router } from '@angular/router';
import { NewsServService } from 'src/app/SevicesFolder/news-serv.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {



  constructor(private router: Router, private news: NewsServService, private sanitizer: DomSanitizer) { }


  GoToNewsDescription(dataInfoToDescriptionPage: any) {
    console.log(dataInfoToDescriptionPage);
    console.log('News-Description-page');
    this.router.navigate(['/news-description', dataInfoToDescriptionPage.id]);

  }




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
