export class User {
  public user_id: number = 0;
  public username: string = '';
  public profile_picture: string = '';

  constructor(username: string, user_id: number, profile_pic : string) {
    this.username = username;
    this.user_id = user_id;
    this.profile_picture = profile_pic;
  }
}
