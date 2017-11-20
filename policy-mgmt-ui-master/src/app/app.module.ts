import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AllPoliciesComponent } from './all-policies/all-policies.component';
import { UserPoliciesComponent } from './user-policies/user-policies.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MyDatePickerModule} from 'mydatepicker';
import { MatchValidatorDirective } from './_validators/match-validator.directive';
import {AuthGuard} from './_guards/auth.guard';
import { LandingComponent } from './landing/landing.component';
import { UserPolicyChildComponent } from './user-policy-child/user-policy-child.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    AllPoliciesComponent,
    UserPoliciesComponent,
    MatchValidatorDirective,
    LandingComponent,
    UserPolicyChildComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    MyDatePickerModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
