import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Row1Component } from './row1/row1.component';
import { FormsModule } from '@angular/forms';
import { MainComComponent } from './main-com/main-com.component';
import { Header1Component } from './header1/header1.component';
import { Footer1Component } from './footer1/footer1.component';

@NgModule({
  declarations: [
    AppComponent,
    Row1Component,
    MainComComponent,
    Header1Component,
    Footer1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
