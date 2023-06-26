import { Component, OnInit } from '@angular/core';
import { socio } from 'src/app/models/socio';
import { SocioService } from 'src/app/services/socio.service';
import Swal from 'sweetalert2'

import * as pdfMake from  'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-listar-socio',
  templateUrl: './listar-socio.component.html',
  styleUrls: ['./listar-socio.component.css']
})

export class ListarSocioComponent implements OnInit{

  listSocios: socio[] = [];
  elementos: number = 0;

  constructor(private socioService: SocioService){}

  ngOnInit(): void {
    this.obtenerSocios();
  }

  openPdfTables() {
    const documentDefinition: any = {
      content: [
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 100, '*'],
            body: [
              [{ text: 'Nombre', bold: true }, { text: 'Direccion', bold: true }, { text: 'Telefono', bold: true }, { text: 'Fecha de Creacion', bold: true }, { text: 'Director Favorito', bold: true }, { text: 'Actor Favorito', bold: true }, { text: 'Genero Preferido', bold: true }],
              [this.listSocios[0].nombre, this.listSocios[0].direccion, this.listSocios[0].telefono, this.listSocios[0].fechaCreacion, this.listSocios[0].directorFavorito, this.listSocios[0].actorFavorito, this.listSocios[0].generoPreferido],
              [this.listSocios[1].nombre, this.listSocios[1].direccion, this.listSocios[1].telefono, this.listSocios[1].fechaCreacion, this.listSocios[1].directorFavorito, this.listSocios[1].actorFavorito, this.listSocios[1].generoPreferido],
              [this.listSocios[2].nombre, this.listSocios[2].direccion, this.listSocios[2].telefono, this.listSocios[2].fechaCreacion, this.listSocios[2].directorFavorito, this.listSocios[2].actorFavorito, this.listSocios[2].generoPreferido]
            ]    
          }
        }
      ]
    };
    pdfMake.createPdf(documentDefinition).open();
  }

  obtenerSocios(){
    this.socioService.obtenerSocios().subscribe(data => {
      console.log(data);
      this.listSocios = data;
      this.elementos = this.listSocios.length;
    })
  }

  eliminarSocio(id: any) {
    this.socioService.eliminarSocio(id).subscribe(data => {
      Swal.fire({
        title: 'Eliminacion de Socio',
        text: "¿Desea eliminar al Socio?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(data);
          this.obtenerSocios();
          this.elementos = this.listSocios.length;
        }
      })
    })
  }
}
