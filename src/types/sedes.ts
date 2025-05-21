export type Subsede = {
    texto: string;
    imagen: string;
    link: string;
  }
  
  export type Sede = {
    id: string;
    nombre: string;
    sedes: Subsede[];
  }
  
  export type SedesData = Sede[];