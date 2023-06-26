export class pelicula{
    _id?: string;
    titulo: string;
    genero: string;
    director: string;
    actores: string;

    constructor(titulo:string, genero:string, director: string, actores: string){
        this.titulo = titulo;
        this.genero = genero;
        this.director = director;
        this.actores = actores;
    }
}