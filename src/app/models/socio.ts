export class socio {
    _id?: string;
    nombre: string;
    direccion: string;
    telefono: number;
    fechaCreacion: Date;
    directorFavorito: string;
    actorFavorito: string;
    generoPreferido: string;
    prestamo: string;

    constructor(nombre:string, direccion:string, telefono: number, 
                fechaCreacion: Date, directorFavorito: string,
                actorFavorito: string, generoPreferido: string, prestamo: string){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.fechaCreacion = fechaCreacion;
        this.directorFavorito = directorFavorito;
        this.actorFavorito = actorFavorito;
        this.generoPreferido = generoPreferido;
        this.prestamo = prestamo;
    }
}