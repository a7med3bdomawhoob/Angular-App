import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MyComponent/home/home.component';
import { AboutComponent } from './MyComponent/about/about.component';
import { NavbarComponent } from './MyComponent/navbar/navbar.component';
import { SlidderComponent } from './MyComponent/slidder/slidder.component';
import { LandingPageComponent } from './MyComponent/landing-page/landing-page.component';
import { ServicesComponent } from './MyComponent/services/services.component';
import { ContactUsComponent } from './MyComponent/contact-us/contact-us.component';
import { ProjectExambleComponent } from './MyComponent/project-examble/project-examble.component';
import { FooterComponent } from './MyComponent/footer/footer.component';
import { MainServicesComponent } from './MyComponent/main-services/main-services.component';
import { NewsPageComponent } from './MyComponent/news-page/news-page.component';
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
import { JobDetailsComponent } from './MyComponent/job-details/job-details.component';
import { EquipmentDescriptionComponent } from './MyComponent/equipment-description/equipment-description.component';











//const routes: Routes = [];

const routes: Routes = [
   { path: '', component: LandingPageComponent }, // Default route
  { path: 'about', component: AboutComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'Slidder', component: SlidderComponent },
  { path: 'about_us', component: AboutComponent },
  { path: 'our_leadership', component: NavbarComponent },
  { path: 'our_values', component: SlidderComponent },
  { path: 'news', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'projects', component: NavbarComponent },
  { path: 'equipments', component: SlidderComponent },
  { path: 'careers', component: NavbarComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'project-example/:ImageName', component: ProjectExambleComponent },
  { path: 'main-services', component: MainServicesComponent },
  { path: 'news-page', component: NewsPageComponent },
  { path: 'governance', component: NewGovernanceComponent },
  { path: 'all-projects', component: AllProjectsComponent },
  { path: 'service-example', component: ServiceExmapleComponent },
  { path: 'news-description/:id', component: NewsDescriptionComponent },
  { path: 'career-open-positions', component: CareerOpenPositionsComponent },

  { path: 'Who-We-Are', component: WhoWeAreComponent },
  { path: 'Equipment', component: EquipmentComponent },
  { path: 'Equipment-description/:id', component: EquipmentDescriptionComponent },
  { path: 'leadership', component: OurLeadershipComponent },
  { path: 'Job_Description/:JobId', component: JobDetailsComponent },
  { path: 'area/:areaId', component: ProjectAreaComponent },
  { path: 'ProjetcExArea/:projectid', component: ProjectExambleForAreaComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
