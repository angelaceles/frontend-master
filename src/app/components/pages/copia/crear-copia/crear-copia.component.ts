import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { copia } from 'src/app/models/copia';
import { CopiaService } from 'src/app/services/copia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-copia',
  templateUrl: './crear-copia.component.html',
  styleUrls: ['./crear-copia.component.css']
})
export class CrearCopiaComponent {
  copiaForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              public copiaService: CopiaService) {
  this.copiaForm = this.fb.group({
       pelicula:    ['', Validators.required],
       id_cinta: ['', Validators.required],
       disponible:  ['', Validators.required]
    })            
  }
  crearCopia() {
    const COPIA: copia = {
      pelicula: this.copiaForm.get('pelicula')?.value,
      id_cinta: this.copiaForm.get('id_cinta')?.value,
      disponible: this.copiaForm.get('disponible')?.value,
    }
    
    console.log(COPIA)
    
    
    Swal.fire({
      title: 'Creacion de Copia',
      text: "¿Desea crear una copia?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.copiaService.crearCopia(COPIA).subscribe(data =>{
          console.log(data);
          this.router.navigate(['/copias'])
        }) 
      }
    })
  }
}
