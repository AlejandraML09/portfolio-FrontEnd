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

export let emptyEducacion: Educacion = {
  id: 0,
  persona: "",
  escuela: "",
  titulo: "",
  puntaje: 0,
  inicio: new Date(),
  fin: new Date(),
  escuela_image: "",
  escuela_url: ""
}

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

export let emptyExperiencia: Experiencia = {
  id: 0,
  compania: "",
  puesto: "",
  jornada: "",
  inicio: new Date(),
  fin: new Date(),
  puesto_image: "",
  puesto_url: ""
}

export type Skills = {
  id: number;
  lenguaje: string;
  porcentaje_de_conocimiento: string;
}

export let emptySkill: Skills = {
  id: 0,
  lenguaje: "",
  porcentaje_de_conocimiento: ""
}

export type Project = {
  id: number;
  nombre_proyecto: string;
  descripcion: string;
  fecha_inicio: Date;
  fecha_final: Date;
  url: string;
}

export let emptyProject: Project = {
  id: 0,
  nombre_proyecto: "",
  descripcion: "",
  fecha_inicio: new Date(),
  fecha_final: new Date(),
  url: ""
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