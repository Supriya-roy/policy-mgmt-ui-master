import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {AuthGuard} from './_guards/auth.guard';
import {AllPoliciesComponent} from './all-policies/all-policies.component';
import {LandingComponent} from './landing/landing.component';

const routes: Routes = [
  // map '/persons to people list component
  {
    path: 'home',
    component: LoginComponent
  },
  // route for person details component
  /*{
    path: 'persons/:id',
    component: PersonDetailsComponent
  },*/
  {
    path: 'register',
    component: RegistrationComponent/*,
    canActivate: [AuthGuard]*/
  },
  {
    path: 'landing',
    component: LandingComponent,
    canActivate: [AuthGuard]
  }, /*
  {
    path: 'allPolicy',
    component: AllPoliciesComponent,
    canActivate: [AuthGuard]
  },*/
  // map '/' to '/persons'as our default route
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
// export const appRouterModule = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
