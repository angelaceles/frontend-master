export class copia{
    _id?: string;
    pelicula: string;
    id_cinta: string;
    disponible: boolean;

    constructor(pelicula: string, id_cinta:string, disponible: boolean){
        this.pelicula = pelicula;
        this.id_cinta = id_cinta;
        this.disponible = disponible;
    }
}
