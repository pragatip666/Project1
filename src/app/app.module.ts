import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmiCalculatorComponentComponent } from './emi-calculator-component/emi-calculator-component.component';
import { EligibilityCalculatorComponentComponent } from './eligibility-calculator-component/eligibility-calculator-component.component';
import { IncomeDetailsComponentComponent } from './income-details-component/income-details-component.component';
import { PersonalDetailsComponentComponent } from './personal-details-component/personal-details-component.component';
import { LoanDetailsComponentComponent } from './loan-details-component/loan-details-component.component';

@NgModule({
  declarations: [
    AppComponent,
    EmiCalculatorComponentComponent,
    EligibilityCalculatorComponentComponent,
    IncomeDetailsComponentComponent,
    PersonalDetailsComponentComponent,
    LoanDetailsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
