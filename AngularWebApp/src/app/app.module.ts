import { StatisticComponent } from './statistic/statistic.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { from } from 'rxjs';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'bmiCalculator', component: BmiCalculatorComponent},
  {path: 'statistic', component: StatisticComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StatisticComponent,
    BmiCalculatorComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
