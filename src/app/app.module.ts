import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { TechStackComponent } from './Components/tech-stack/tech-stack.component';
import { AboutComponent } from './Components/about/about.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { ProjectComponent } from './Components/project/project.component';
import { ContactPageComponent } from './Components/contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TechStackComponent,
    AboutComponent,
    NavBarComponent,
    ProjectComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
