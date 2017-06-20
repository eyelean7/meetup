
import { WelcomeComponent } from './welcome/welcome.component'
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewMeetupComponent } from './new-meetup/new-meetup.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MeetupDetailsComponent } from './meetup-details/meetup-details.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchComponent } from './search/search.component';
import { AllMeetupsComponent } from './all-meetups/all-meetups.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'meetups/:id',
    component: MeetupDetailsComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'meetups',
    component: AllMeetupsComponent
  },
  {
    path: 'meetup/new',
    component: NewMeetupComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
