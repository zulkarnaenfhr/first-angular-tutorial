import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Containers/HomePage/HomePage.component';
import { AboutPageComponent } from './Containers/about-page/about-page.component';
import { DetailsComponent } from './Containers/details/details.component';
import { ErrorComponentComponent } from './Containers/error-component/error-component.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutPageComponent, DetailsComponent, ErrorComponentComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
