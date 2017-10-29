import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { ClientsComponent } from './clients/clients.component';
import { ProjectsComponent } from './projects/projects.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { CarriersComponent } from './carriers/carriers.component';
import { InsightsComponent } from './insights/insights.component';
import { ContactComponent } from './contact/contact.component';


const appRoutes: Routes = [
  
   { path: '', redirectTo: 'home', pathMatch:'full' }, 
    { path: 'home', component: HomeComponent }, 
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'clients', component: ClientsComponent }, 
    { path: 'projects', component: ProjectsComponent },
    { path: 'technologies', component: TechnologiesComponent },
    { path: 'carriers', component: CarriersComponent }, 
    { path: 'insights', component: InsightsComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    NavigationComponent,
    FooterComponent,
    ClientsComponent,
    ProjectsComponent,
    TechnologiesComponent,
    CarriersComponent,
    InsightsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
      //{ enableTracing: true } // <-- debugging purposes only 
  ),
  AngularFontAwesomeModule,
  BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
