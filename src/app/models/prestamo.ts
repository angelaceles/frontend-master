export class prestamo {
    _id?: string;
    socio: string;
    copia: string;
    fechaPrestamo: Date;
    fechaDevolucion: Date;
    entregado: boolean;

    constructor(socio:string, copia:string, fechaPrestamo: Date, fechaDevolucion: Date, 
                entregado: boolean){
      this.socio = socio;
      this.copia = copia;
      this.fechaPrestamo = fechaPrestamo;
      this.fechaDevolucion = fechaDevolucion;
      this.entregado = entregado;
    }
}
