import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http'
//services
import { AuthService } from './auth/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
//components
import { AppComponent } from './app.component';
import { CheckNameComponent } from './check-name/check-name.component';
import { PropertyDetailsComponent } from './properties/property-details/property-details.component';
import { PropertiesComponent } from './properties/properties.component';
import { AboutComponent } from './about/about.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HeaderComponent } from './header/header.component';
//forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './user/user.component';
import { LogoutComponent } from './user/logout/logout.component';
import { MaterialModule } from './material/material.module';
import { SagitComponent } from './properties/sagit/sagit.component';
import { TokenInterceptor } from './http-inerceptors/token-interceptor';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckNameComponent,
    PropertyDetailsComponent,
    PropertiesComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    HowItWorksComponent,
    UserComponent,
    LogoutComponent,
    SagitComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    LayoutModule,
    MaterialModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
