import { SidebarModule } from '@syncfusion/ej2-angular-navigations'
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
@Component({


  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: ` <ejs-sidebar id="default-sidebar" >
              <div class="title"> Sidebar content</div>
            </ejs-sidebar>
            <div>
              <div class="title">Main content</div>
              <div class="sub-title">
                  Content goes here.
              </div>
            </div>`,
})
export class AppComponent {
  isCollapsed = true;

  toggleMenu() {
    if (this.isMobile) {
      this.sidenav.toggle();
      this.isCollapsed = false; // On mobile, the menu can never be collapsed
    } else {
      this.sidenav.open(); // On desktop/tablet, the menu can never be fully closed
      this.isCollapsed = !this.isCollapsed;
    }
  }

  title = 'material-responsive-sidenav';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile = true;


  constructor(private observer: BreakpointObserver, private router: Router) { }








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
