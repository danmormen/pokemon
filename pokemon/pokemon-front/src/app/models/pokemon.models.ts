
export class Pokemon {
    id: number | null;  
    nombre: string;
    tipo: string;
    generacion: string;
  
    constructor(id: number | null, nombre: string, tipo: string, generacion: string) {
      this.id = id;
      this.nombre = nombre;
      this.tipo = tipo;
      this.generacion = generacion;
    }
  }
  
  export class ResponsePokemon {
    errorCode: number = 0;  
    mensaje: string = '';
    data: Pokemon[] | null = null;
  }
  