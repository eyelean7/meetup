import { Injectable } from '@angular/core';
import { Carpool } from './carpool.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class CarpoolService {
  carpools: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.carpools = database.list('carpools');
  }

  getCarpools() {
    return this.carpools;
  }

  addCarpool(newCarpool: Carpool) {
    this.carpools.push(newCarpool);
  }

  getCarpoolById(carpoolId: string) {
    return this.database.object('carpools/' + carpoolId);
  }

  updateCarpool(localUpdatedCarpool) {
    const carpoolEntryInFirebase = this.getCarpoolById(localUpdatedCarpool.$key);
    carpoolEntryInFirebase.update({host: localUpdatedCarpool.host,
                                   meetup: localUpdatedCarpool.meetup,
                                   usersPerCarpool: localUpdatedCarpool.usersPerCarpool});
  }

}
