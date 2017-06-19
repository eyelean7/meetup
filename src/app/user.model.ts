export class User {
  public meetupsPerUser: string[] = ['filler'];
  constructor(public username: string, public password: string, public zipCode: string, public dateTimeCreated: string) { };
}
