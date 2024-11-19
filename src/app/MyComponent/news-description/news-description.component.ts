import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NamaaServicesService } from 'src/app/SevicesFolder/namaa-services.service';
import { NewsServService } from 'src/app/SevicesFolder/news-serv.service';

@Component({
  selector: 'app-news-description',
  templateUrl: './news-description.component.html',
  styleUrls: ['./news-description.component.scss']
})
export class NewsDescriptionComponent implements OnInit {

  constructor(private namaa:NamaaServicesService, private router: Router, private route: ActivatedRoute, private news: NewsServService, private sanitizer: DomSanitizer) { }

  GoToNewsDescription() {
    console.log('news-description');
    this.router.navigate(['/news-description']);
  }
  newsId: any;
  NewsInfo: any;

  GetNewsInfoByNewsId() {
    this.news.GetNewsByNewsId(this.newsId).subscribe((res) => {
      console.log(res);
      this.NewsInfo = res;

      this.GetNewsImageByNewsId();

    });
  }
  Image: any;
  sanitizeImage(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

  GetNewsImageByNewsId() {
    this.news.GetImageByImageName(this.NewsInfo.image_Name).subscribe((res) => {
      console.log(res);
      this.Image = this.sanitizeImage(res);

    })
  }

  lang: any;
  GetLang() {
    this.lang = localStorage.getItem("lang");
    console.log(this.lang);
  }


  ImgbaseUrl:any;
  /////////////////  when deploy img not appeare new Problem Solved 
  getSanitizedImageUrl(): SafeUrl {

    const fullUrl = `${this.ImgbaseUrl}News/${this.NewsInfo.image_Name}`;
    console.log(fullUrl);
    return this.sanitizer.bypassSecurityTrustUrl(fullUrl);
  }
  ////////////////


  ngOnInit(): void {
    this.GetLang();
    this.ImgbaseUrl = this.namaa.imgbaseurl;
    this.newsId = this.route.snapshot.paramMap.get('id');
    console.log(this.newsId);

    this.GetNewsInfoByNewsId();

    this.getSanitizedImageUrl()

  }

}
