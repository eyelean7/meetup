
import { WelcomeComponent } from './welcome/welcome.component'
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewMeetupComponent } from './new-meetup/new-meetup.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MeetupDetailsComponent } from './meetup-details/meetup-details.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'sign-up',
    component: LoginPageComponent
  },
  {
    path: 'meetups/:id',
    component: MeetupDetailsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
