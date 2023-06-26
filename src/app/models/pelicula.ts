export class pelicula{
    _id?: string;
    titulo: string;
    genero: string;
    director: string;
    actores: string;
    copias: string;

    constructor(titulo:string, genero:string, director: string, actores: string, copias: string){
        this.titulo = titulo;
        this.genero = genero;
        this.director = director;
        this.actores = actores;
        this.copias = copias;
    }
}