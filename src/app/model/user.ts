export class User {
  public user_id: number = 0;
  public username: string = '';
  public profile_picture: string = '';
  public banner_image: string = '';
  public nombre: string = '';
  public apellido: string = '';
  public ocupacion: string = '';

  constructor(
    username: string,
    user_id: number,
    profile_pic: string,
    banner_image: string,
    nombre: string,
    apellido: string,
    ocupacion: string
  ) {
    this.username = username;
    this.user_id = user_id;
    this.profile_picture = profile_pic;
    this.banner_image = banner_image;
    this.nombre = nombre;
    this.apellido = apellido;
    this.ocupacion = ocupacion;
  }
}
