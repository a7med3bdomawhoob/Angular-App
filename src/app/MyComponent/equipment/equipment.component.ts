import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AreaServicesService } from 'src/app/area-services.service';
import { EquipementSService } from 'src/app/SevicesFolder/equipement-s.service';
import { NamaaServicesService } from 'src/app/SevicesFolder/namaa-services.service';
import { ServicesServiceService } from 'src/app/SevicesFolder/services-service.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {


  constructor(private router: Router, private equi: EquipementSService, private namaa: NamaaServicesService, private sanitizer: DomSanitizer) { }
  DataTransferFromMainToExample: any = null;

  EquipementId: any;
  ShowEquipementId(e: any, equipement_Description: any, equipement_Name: any, equipement_Functions: any, equipement_Parts: any, image_Name: any) {
    console.log(e);
    localStorage.setItem("EquipementId", e);
    localStorage.setItem("Equipement_Name", equipement_Name);
    localStorage.setItem("image_Name", image_Name);
    localStorage.setItem("Equipement_Description", equipement_Description);
    localStorage.setItem("equipement_Functions", equipement_Functions);
    localStorage.setItem("equipement_Parts", equipement_Parts);
    this.EquipementId = e;
console.log(this.EquipementId);

this.router.navigate(['Equipment-description', this.EquipementId]);
// In your component


console.log(this.EquipementId);


  }

  EquipementData: any;
  GetAllEquipement() {
    this.equi.GetAllEquipment().subscribe((res: any) => {
      console.log(res);
      this.EquipementData = res;
    });
  }


  EquipementDescription() {
    console.log("Equipment-description");
    this.router.navigate(['Equipment-description', this.EquipementId]);
    //this.router.navigate(["Equipment-description"])
  }

  EquipementImages: any = [];

  GetImageForService() {
    this.equi.GetImages().subscribe((res) => {
      console.log(res);
      this.EquipementImages = res;
    });
  }


  ImageName: any;
  ImageDetails(e: any) {
    const srcValue = e.target.src;
    const extractedPart = srcValue.split(':')[1].split(';')[0];
    this.ImageName = extractedPart;
    this.ImageName = extractedPart;
    console.log(this.ImageName);


    // const data = this.ProjectDtails;


    // this.router.navigate(['/project-example']);    //must be on module

  }


  imageUrls: SafeUrl | any;
  GetImage() {
    this.equi.GetImages().subscribe(images => {
      // Sanitize each image URL
      this.imageUrls = images.map((image: string) => this.sanitizeUrl(image));
    });
    console.log(this.imageUrls);
  }

  sanitizeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }



/////////////////  when deploy img not appeare new Problem Solved 
getSanitizedImageUrl(equi: any): SafeUrl {
  const fullUrl = `${this.ImgbaseUrl}Equipements/${equi.image_Name}`;
  return this.sanitizer.bypassSecurityTrustUrl(fullUrl);
}
////////////////


  ImgbaseUrl:any;
  lang:any;
  GetLang() {
    this.lang = localStorage.getItem("lang");
    console.log(this.lang);
  }
  ngOnInit(): void {
    this.GetLang();
    this.ImgbaseUrl=this.namaa.imgbaseurl;
    this.GetAllEquipement();
    this.GetImageForService();
    this.GetImage();

  }


}
