import { Component, OnInit } from '@angular/core';
import { pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';
import Swal from 'sweetalert2';

import * as pdfMake from  'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-listar-pelicula',
  templateUrl: './listar-pelicula.component.html',
  styleUrls: ['./listar-pelicula.component.css']
})
export class ListarPeliculaComponent implements OnInit{

  listPeliculas: pelicula[] = [];
  elementos: number = 0;

  constructor(private peliculaService: PeliculaService){}

  ngOnInit(): void {
    this.obtenerPeliculas();
  }

  openPdfTables() {
    const documentDefinition: any = {
      content: [
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 100, '*'],
            body: [
              [{ text: 'Titulo', bold: true }, { text: 'Genero', bold: true }, { text: 'Director', bold: true }, { text: 'Actores', bold: true }],
              [this.listPeliculas[0].titulo, this.listPeliculas[0].genero, this.listPeliculas[0].director, this.listPeliculas[0].actores],
              [this.listPeliculas[1].titulo, this.listPeliculas[1].genero, this.listPeliculas[1].director, this.listPeliculas[1].actores],
              [this.listPeliculas[2].titulo, this.listPeliculas[2].genero, this.listPeliculas[2].director, this.listPeliculas[2].actores]
            ]    
          }
        }
      ]
    };
    pdfMake.createPdf(documentDefinition).open();
  }

  obtenerPeliculas(){
    this.peliculaService.obtenerPeliculas().subscribe(data => {
      console.log(data);
      this.listPeliculas = data;
      this.elementos = this.listPeliculas.length;
    })
  }

  eliminarPelicula(id: any) {
    this.peliculaService.eliminarPelicula(id).subscribe(data => {
      Swal.fire({
        title: 'Eliminacion de la Pelicula',
        text: "¿Desea eliminar la Pelicula?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(data);
          this.obtenerPeliculas();
          this.elementos = this.listPeliculas.length;
        }
      })
    })
  }
}
