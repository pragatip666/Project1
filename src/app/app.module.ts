import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';
import { LoandetailsComponent } from './loandetails/loandetails.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { IncomedetailsComponent } from './incomedetails/incomedetails.component';
import { EligibilitycalculatorComponent } from './eligibilitycalculator/eligibilitycalculator.component';


import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    EmicalculatorComponent,
    LoandetailsComponent,
    PersonaldetailsComponent,
    IncomedetailsComponent,
    EligibilitycalculatorComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
