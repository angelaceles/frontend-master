import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrestamoService } from 'src/app/services/prestamo.service';
import { prestamo } from 'src/app/models/prestamo';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-prestamo',
  templateUrl: './crear-prestamo.component.html',
  styleUrls: ['./crear-prestamo.component.css']
})
export class CrearPrestamoComponent {

  prestamoForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              public prestamoService: PrestamoService) {
    this.prestamoForm = this.fb.group({
         socio:             ['', Validators.required],
         copia:             ['', Validators.required],
         fechaPrestamo:     ['', Validators.required],
         fechaDevolucion:   ['', Validators.required],
         entregado:         ['', Validators.required]
    })            
  }
  
  crearPrestamo() {
    const PRESTAMO: prestamo = {
      socio: this.prestamoForm.get('socio')?.value,
      copia: this.prestamoForm.get('copia')?.value,
      fechaPrestamo: this.prestamoForm.get('fechaPrestamo')?.value,
      fechaDevolucion: this.prestamoForm.get('fechaDevolucion')?.value,
      entregado: this.prestamoForm.get('entregado')?.value,
    }
    
    console.log(PRESTAMO)
    
    Swal.fire({
      title: 'Creacion de Prestamo',
      text: "¿Desea crear un Prestamo?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.prestamoService.crearPrestamo(PRESTAMO).subscribe(data =>{
          console.log(data);
          this.router.navigate(['/prestamos'])
        }) 
      }
    })
  }
}
