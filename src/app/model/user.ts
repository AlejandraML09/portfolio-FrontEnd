export class User {
  public user_id: number = 0;
  public username: string = '';

  constructor(username: string, user_id: number) {
    this.username = username;
    this.user_id = user_id;
  }
}
