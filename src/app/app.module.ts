import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { NewMeetupComponent } from './new-meetup/new-meetup.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MeetupDetailsComponent } from './meetup-details/meetup-details.component';
import { AuthService } from './providers/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { WelcomeComponent } from './welcome/welcome.component';
import { SearchComponent } from './search/search.component';
import { AllMeetupsComponent } from './all-meetups/all-meetups.component';
import { AgmCoreModule } from '@agm/core';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    NewMeetupComponent,
    MeetupDetailsComponent,
    WelcomeComponent,
    SearchComponent,
    AllMeetupsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
     apiKey: 'AIzaSyBeIQALIw7Ii_dl7ZVTwnvt5C2ZAgSfLu8'
   })
  ],
  providers: [AuthService,
    AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
