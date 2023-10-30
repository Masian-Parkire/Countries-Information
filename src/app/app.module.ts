import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { WorldHttpService } from './world-http.service';
import {  RouterModule } from '@angular/router';


@NgModule({
  declarations: [AppComponent, CountryComponent],
  imports: [BrowserModule, HttpClientModule,RouterModule.forRoot([])], // Add HttpClientModule to your imports
  providers: [WorldHttpService], // Provide the service here
  bootstrap: [AppComponent],
})
export class AppModule {}
