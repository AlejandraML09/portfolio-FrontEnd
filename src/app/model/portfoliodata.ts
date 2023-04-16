export type PortfolioData = {
  id: number;
  nombre: string;
  apellido: string;
  fecha_nacimiento: Date;
  nacionalidad: string;
  email:string;
  sobre_mi: string;
  ocupacion: string;
  banner_image: string;
  profile_picture: string;
  contacto: string;
  educaciones: Educacion[];
  experiencias: Experiencia[];
};

export type Educacion = {
  id: number;
  persona: string;
  escuela: string;
  titulo: string;
  puntaje: number;
  inicio: Date;
  fin: Date;
  escuela_image: string;
  escuela_url: string;
};

export type Experiencia = {
  id: number;
  compania: string;
  puesto: string;
  jornada: string;
  inicio: Date;
  fin: Date;
  puesto_image: string;
  puesto_url: string;

}