import { Component, OnInit } from '@angular/core';
import { copia } from 'src/app/models/copia';
import { CopiaService } from 'src/app/services/copia.service';
import Swal from 'sweetalert2'

import * as pdfMake from  'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-listar-copia',
  templateUrl: './listar-copia.component.html',
  styleUrls: ['./listar-copia.component.css']
})
export class ListarCopiaComponent implements OnInit{
  
  listCopias: copia[] = [];
  elementos: number = 0;

  constructor(private copiaService: CopiaService){}

  ngOnInit(): void {
    this.obtenerCopias();
  }

  openPdfTables() {
    const documentDefinitions: any = {
      content: [
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 100, '*'],
            body: [
              [{ text: 'Pelicula', bold: true }, { text: 'Id_cinta', bold: true }, { text: 'Disponible', bold: true }],
              [this.listCopias[0].pelicula, this.listCopias[0].id_cinta, this.listCopias[0].disponible],
              [this.listCopias[1].pelicula, this.listCopias[1].id_cinta, this.listCopias[1].disponible],
              [this.listCopias[2].pelicula, this.listCopias[2].id_cinta, this.listCopias[2].disponible]
            ]    
          }
        }
      ]
    };
    pdfMake.createPdf(documentDefinitions).open();
  }

  obtenerCopias(){
    this.copiaService.obtenerCopias().subscribe(data => {
      console.log(data);
      this.listCopias = data;
      this.elementos = this.listCopias.length;
    })
  }

  eliminarCopia(id: any) {
    this.copiaService.eliminarCopia(id).subscribe(data => {
      Swal.fire({
        title: 'Eliminacion de Copia',
        text: "¿Desea eliminar la Copia?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(data);
          this.obtenerCopias();
          this.elementos = this.listCopias.length;
        }
      })
    })
  }
}
