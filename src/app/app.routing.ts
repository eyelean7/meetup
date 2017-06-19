
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewMeetupComponent } from './new-meetup/new-meetup.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const appRoutes: Routes = [
  // {
  //   path: '',
  //   component: WelcomeComponent
  // },
  {
    path: 'new-meetup',
    component: NewMeetupComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  // {
  //   path: 'meetup/:id',
  //   component: MeetupDetailsComponent
  // }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
