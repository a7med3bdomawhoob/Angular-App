import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { EquipementSService } from 'src/app/SevicesFolder/equipement-s.service';

@Component({
  selector: 'app-equipment-description',
  templateUrl: './equipment-description.component.html',
  styleUrls: ['./equipment-description.component.scss']
})
export class EquipmentDescriptionComponent implements OnInit {

  constructor(private route: ActivatedRoute, private equi: EquipementSService, private sanitizer: DomSanitizer) { }

  AllObject: any;

  Equipement_Name: any;
  Equipement_Description: any;
  EquipementId: any;

  EquipementData: any;
  ImageNameOfService: any;



  GetEquipmentByEquipementId() {
    console.log(this.EquipementId);
    this.equi.GetEquipementByEquipementId(this.EquipementId).subscribe((res) => {
      console.log(res);
      this.EquipementData = res;
      this.ImageNameOfService = this.EquipementData[0].image_Name;
      console.log(this.ImageNameOfService);
      this.GetImageOfEquipementByImageName();
    });
  }


  images: SafeUrl[] = [];  // Use SafeUrl to store sanitized URLs
  sanitizeImage(image: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(image);
  }

  EquipmentImage: SafeUrl[] = [];
  GetImageOfEquipementByImageName() {
    this.equi.GetImageOfEquipementByImageName(this.ImageNameOfService).subscribe((res: string[]) => {
      console.log(res);

      this.images = res.map(res => this.sanitizeImage(res));
      console.log(this.images);
    });
  }




  lang:any;
  GetLang() {
    this.lang = localStorage.getItem("lang");
    console.log(this.lang);
  }
  ngOnInit(): void {
    this.GetLang();




    this.EquipementId = localStorage.getItem("EquipementId");
    console.log(this.EquipementId);
    this.Equipement_Description = localStorage.getItem("Equipement_Description");
    this.Equipement_Name = localStorage.getItem("Equipement_Name");
    console.log(this.Equipement_Description);
    console.log(this.Equipement_Name);

    this.GetEquipmentByEquipementId();
  }

}
