import { Component, OnInit } from '@angular/core';
import { prestamo } from 'src/app/models/prestamo';
import { PrestamoService } from 'src/app/services/prestamo.service';
import Swal from 'sweetalert2';

import * as pdfMake from  'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-listar-prestamo',
  templateUrl: './listar-prestamo.component.html',
  styleUrls: ['./listar-prestamo.component.css']
})
export class ListarPrestamoComponent implements OnInit{

  listPrestamos: prestamo[] = [];
  elementos: number = 0;

  constructor(private prestamoService: PrestamoService){}

  ngOnInit(): void {
    this.obtenerPrestamos();
  }

  openPdfTables() {
    const documentDefinition: any = {
      content: [
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 100, '*'],
            body: [
              [{ text: 'Socio', bold: true }, { text: 'Copia', bold: true }, { text: 'Fecha de Prestamo', bold: true }, { text: 'Fecha de Devolucion', bold: true }, { text: 'Entregado', bold: true }],
              [this.listPrestamos[0].socio, this.listPrestamos[0].copia, this.listPrestamos[0].fechaPrestamo, this.listPrestamos[0].fechaDevolucion, this.listPrestamos[0].entregado],
              [this.listPrestamos[1].socio, this.listPrestamos[1].copia, this.listPrestamos[1].fechaPrestamo, this.listPrestamos[1].fechaDevolucion, this.listPrestamos[1].entregado],
              [this.listPrestamos[2].socio, this.listPrestamos[2].copia, this.listPrestamos[2].fechaPrestamo, this.listPrestamos[2].fechaDevolucion, this.listPrestamos[2].entregado,]
            ]    
          }
        }
      ]
    };
    pdfMake.createPdf(documentDefinition).open();
  }

  obtenerPrestamos(){
    this.prestamoService.obtenerPrestamos().subscribe(data => {
      console.log(data);
      this.listPrestamos = data;
      this.elementos = this.listPrestamos.length;
    })
  }

  eliminarPrestamo(id: any) {
    this.prestamoService.eliminarPrestamoHecho(id).subscribe(data => {
      Swal.fire({
        title: 'Eliminacion del Prestamo',
        text: "¿Desea eliminar el Prestamo?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(data);
          this.obtenerPrestamos();
          this.elementos = this.listPrestamos.length;
        }
      })
    })
  }
}
