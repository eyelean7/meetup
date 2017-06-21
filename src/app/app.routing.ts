import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewMeetupComponent } from './new-meetup/new-meetup.component';
import { MeetupDetailsComponent } from './meetup-details/meetup-details.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SearchComponent } from './search/search.component';
import { AllMeetupsComponent } from './all-meetups/all-meetups.component';
import { MeetupApiComponent } from './meetup-api/meetup-api.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'meetups/:id',
    component: MeetupDetailsComponent
  },
  {
    path: 'search',
    component: MeetupApiComponent
  },
  {
    path: 'meetups',
    component: AllMeetupsComponent
  },
  {
    path: 'meetup/new',
    component: NewMeetupComponent
  },
  {
    path: 'find',
    component: MeetupApiComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
