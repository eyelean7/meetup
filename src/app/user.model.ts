export class User {
  constructor(public username: string, public password: string, public zipCode: string, public dateTimeCreated: string, public meetups: Meetup[]);
}
