import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './models/auth-interceptor';

import { HostComponent } from './host/host/host.component';
import { DashboardComponent } from './host/dashboard/dashboard.component';
import { PropertyComponent } from './host/property/property.component';
import { EditHouseComponent } from './host/edit-house/edit-house.component';
import { ViewHouseComponent } from './host/view-house/view-house.component';
import { AddHouseComponent } from './host/add-house/add-house.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuardService } from './guard/auth-guard.service';
import { BookingComponent } from './customer/booking/booking.component';
import { EditProfileComponent } from './customer/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './customer/change-password/change-password.component';
import { EditAccountComponent } from './customer/edit-account/edit-account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LoginFBComponent } from './login-fb/login-fb.component';
import { SocialLoginModule } from 'angularx-social-login';
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider  } from 'angularx-social-login';


const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('430239822953-suuacgpg06trhdk7f53lq6tmupbe0qdg.apps.googleusercontent.com')
  },
   {
     id: FacebookLoginProvider.PROVIDER_ID,
     provider: new FacebookLoginProvider('363164397686322')
   },
  // {
  //   id: LinkedInLoginProvider.PROVIDER_ID,
  //   provider: new LinkedInLoginProvider("78iqy5cu2e1fgr")
  // }
]);

export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserComponent,
    HostComponent,
    DashboardComponent,
    PropertyComponent,
    EditHouseComponent,
    ViewHouseComponent,
    AddHouseComponent,
    HomePageComponent,
    BookingComponent,
    EditProfileComponent,
    ChangePasswordComponent,
    EditAccountComponent,
    LoginFBComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    SocialLoginModule
  ],

  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    httpInterceptorProviders, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
