import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './MyComponent/home/home.component';
import { NavbarComponent } from './MyComponent/navbar/navbar.component';
import { SlidderComponent } from './MyComponent/slidder/slidder.component';
import { BriefAboutUsComponent } from './MyComponent/brief-about-us/brief-about-us.component';
import { ProjectsCounterComponent } from './MyComponent/projects-counter/projects-counter.component';
import { LandingPageComponent } from './MyComponent/landing-page/landing-page.component';
import { ComplexSlidderComponent } from './MyComponent/complex-slidder/complex-slidder.component';
import { ClientsComponent } from './MyComponent/clients/clients.component';

import { CareerComponent } from './MyComponent/career/career.component';
import { FooterComponent } from './MyComponent/footer/footer.component';
import { ScrollIntoViewDirective } from './scroll-into-view.directive';
import { ServicesComponent } from './MyComponent/services/services.component';
import { ContactUsComponent } from './MyComponent/contact-us/contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobDetailsComponent } from './MyComponent/job-details/job-details.component';
import { ProjectExambleComponent } from './MyComponent/project-examble/project-examble.component';
import { MainServicesComponent } from './MyComponent/main-services/main-services.component';
import { HttpClientModule } from '@angular/common/http';

import { NewGovernanceComponent } from './MyComponent/new-governance/new-governance.component';
import { AllProjectsComponent } from './MyComponent/all-projects/all-projects.component';
import { ServiceExmapleComponent } from './MyComponent/service-exmaple/service-exmaple.component';
import { NewsDescriptionComponent } from './MyComponent/news-description/news-description.component';
import { ProjectAreaComponent } from './MyComponent/project-area/project-area.component';

import { CareerOpenPositionsComponent } from './MyComponent/career-open-positions/career-open-positions.component';
import { WhoWeAreComponent } from './MyComponent/who-we-are/who-we-are.component';
import { EquipmentComponent } from './MyComponent/equipment/equipment.component';
import { ProjectExambleForAreaComponent } from './MyComponent/project-examble-for-area/project-examble-for-area.component';

import { OurLeadershipComponent } from './MyComponent/our-leadership/our-leadership.component';

import { NewsComponent } from './MyComponent/news/news.component';
import { NewsPageComponent } from './MyComponent/news-page/news-page.component';
import { EquipmentDescriptionComponent } from './MyComponent/equipment-description/equipment-description.component';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';










// Import PrimeNG DropdownModule


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LandingPageComponent,
    SlidderComponent,
    BriefAboutUsComponent,
    ProjectsCounterComponent,
    ComplexSlidderComponent,
    ClientsComponent,
    NewsComponent,
    CareerComponent,
    FooterComponent,
    ScrollIntoViewDirective,
    ServicesComponent,
    ContactUsComponent,
    JobDetailsComponent,
    ProjectExambleComponent,
    MainServicesComponent,
    NewsPageComponent,
    NewGovernanceComponent,
    AllProjectsComponent,
    ServiceExmapleComponent,
    NewsDescriptionComponent,
    ProjectAreaComponent,
    CareerOpenPositionsComponent,
    WhoWeAreComponent,
    EquipmentComponent,
    ProjectExambleForAreaComponent,
    OurLeadershipComponent,
    EquipmentDescriptionComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
