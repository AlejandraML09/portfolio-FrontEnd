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
  skills: Skills[];
  proyectos: Project[];
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

export type Skills = {
  id: number;
  lenguaje: string;
  porcentaje_de_conocimiento: string;
}

export type Project = {
  id: number;
  nombre_proyecto: string;
  descripcion: string;
  fecha_inicio: Date;
  fecha_final: Date;
  url: string;
}

export let emptyPorfolio: PortfolioData = {
  id: 0,
  nombre: '',
  apellido: '',
  educaciones: [],
  fecha_nacimiento: new Date(),
  nacionalidad: '',
  email: '',
  sobre_mi: '',
  ocupacion: '',
  banner_image: '',
  profile_picture: '',
  contacto: '',
  experiencias: [],
  skills:[],
  proyectos:[],
};