import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth/auth.guard';
import { CheckNameComponent } from './check-name/check-name.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { LogoutComponent } from './user/logout/logout.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertyDetailsComponent } from './properties/property-details/property-details.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserComponent } from './user/user.component';
import { SagitComponent } from './properties/sagit/sagit.component';

const routes: Routes = [
  {path: '', component: PropertiesComponent},
  {path: 'sagit', component: SagitComponent, canActivate: [AuthGuard]},
  {path: 'check-name', component: PropertyDetailsComponent},
  {path: 'about-sa', component: AboutComponent},
  {path: 'how-it-works', component: HowItWorksComponent},
  {path: 'user', component: UserComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: RegisterComponent},
  {path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
