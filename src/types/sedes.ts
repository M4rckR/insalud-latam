export interface Subsede {
    texto: string;
    imagen: string;
    link: string;
  }
  
  export interface Sede {
    id: string;
    nombre: string;
    sedes: Subsede[];
  }
  
  export type SedesData = Sede[];