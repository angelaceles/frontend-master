import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PrestamoService } from 'src/app/services/prestamo.service';
import { prestamo } from 'src/app/models/prestamo';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-prestamo',
  templateUrl: './editar-prestamo.component.html',
  styleUrls: ['./editar-prestamo.component.css']
})
export class EditarPrestamoComponent implements OnInit{

  prestamoForm: FormGroup;
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private aRouter: ActivatedRoute,
              public prestamoService: PrestamoService){
    this.prestamoForm = this.fb.group({
      socio:             ['', Validators.required],
      copia:             ['', Validators.required],
      fechaPrestamo:     ['', Validators.required],
      fechaDevolucion:   ['', Validators.required],
      entregado:         ['', Validators.required]
    })  
    this.id = aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.validarId()
  }

  validarId(){
    if(this.id !== null){
      this.prestamoService.obtenerPrestamo(this.id).subscribe(data => {
        this.prestamoForm.setValue({
          titulo: data.titulo,
          genero: data.genero,
          director: data.director,
          actores: data.actores
        })
      })
    }
  }

  editarPrestamo(){
    const PRESTAMO: prestamo = {
      socio: this.prestamoForm.get('socio')?.value,
      copia: this.prestamoForm.get('copia')?.value,
      fechaPrestamo: this.prestamoForm.get('fechaPrestamo')?.value,
      fechaDevolucion: this.prestamoForm.get('fechaDevolucion')?.value,
      entregado: this.prestamoForm.get('entregado')?.value,
    }
    
    Swal.fire({
      title: 'Actualizacion de Prestamo',
      text: "¿Desea actualizar el prestamo?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        if(this.id !== null){
          this.prestamoService.devolverPrestamo(this.id, PRESTAMO).subscribe(data => {
              console.log(PRESTAMO);
              this.router.navigate(['/prestamos']) 
          })
        }
      }
    })
  }

}
