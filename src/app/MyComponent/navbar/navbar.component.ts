import { SidebarModule } from '@syncfusion/ej2-angular-navigations'
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {



  constructor(private observer: BreakpointObserver, private router: Router) { }
  isCollapsed = true;

  // toggleMenu() {
  //   if (this.isMobile) {
  //     this.sidenav.toggle();
  //     this.isCollapsed = false; // On mobile, the menu can never be collapsed
  //   } else {
  //     this.sidenav.open(); // On desktop/tablet, the menu can never be fully closed
  //     this.isCollapsed = !this.isCollapsed;
  //   }
  // }

  title = 'material-responsive-sidenav';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile = true;


  isListVisible = false;

  isSidebarOpen = false;

  openSidebar() {
    this.isSidebarOpen = true;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
    this.isListVisible = false;
    this.isListVisible2 = false

  }

  keepSidebarOpen() {
    this.isSidebarOpen = true;
  }



  GoToCareer() {
    console.log('Career');
    this.router.navigate(['/career-open-positions'])
  }


  GoToWhoWeAre() {
    console.log('Who-we-are');
    this.router.navigate(['/Who-We-Are'])
  }
  GoToEquipment() {
    console.log('Equipment');
    this.router.navigate(['/Equipment'])
  }
  GoToOurLeadership() {
    console.log('our-leadership');
    this.router.navigate(['/leadership'])
  }


  MainServices() {
    console.log("main-services");
    this.router.navigate(['/main-services']);
  }



  ContactUs() {
    console.log("contact");
    this.router.navigate(['/contact']);
  }

  Slidder() {
    console.log("Slidder");
    this.router.navigate(['/Slidder']);
  }

  Governance() {
    this.router.navigate(['/governance']);
  }

  NewsPage() {
    this.router.navigate(['/news-page'])
  }

  Navbar() {
    console.log("sdgfdddhhdhd");
    this.router.navigate(['/navbar']);    //must be on module
  }
  GoToProjects() {
    console.log("sdgfdddhhdhd");
    this.router.navigate(['/all-projects']);    //must be on module
  }

  ProjectExamble() {
    console.log("sdgfdddhhdhd");
    this.router.navigate(['/project-example']);    //must be on module
  }



  LandingPage() {
    console.log("LandingPage");
    this.router.navigate(['/'])
  }


  // LandingPage()
  // {
  //   console.log("sdgfdddhhdhd");
  //   this.router.navigate(['/']);    //must be on module
  // }


  // Initial visibility state

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

  isListVisible5 = false; // Initial visibility state

  toggleList5() {
    this.isListVisible5 = !this.isListVisible5; // Toggle the visibility
  }

  isListVisible6 = false; // Initial visibility state

  toggleList6() {
    this.isListVisible6 = !this.isListVisible6; // Toggle the visibility
  }

  lang: any = "en";
  langFun(lngL:any) {
    this.lang = lngL;
    localStorage.setItem("lang",this.lang);
    console.log(this.lang);
    location.reload();
  }


  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if (screenSize.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

}
