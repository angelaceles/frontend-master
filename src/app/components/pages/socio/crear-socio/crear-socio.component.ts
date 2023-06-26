import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { socio } from 'src/app/models/socio';
import { SocioService } from 'src/app/services/socio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-socio',
  templateUrl: './crear-socio.component.html',
  styleUrls: ['./crear-socio.component.css']
})
export class CrearSocioComponent {
  socioForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              public socioService: SocioService) {
  this.socioForm = this.fb.group({
       nombre:            ['', Validators.required],
       direccion:         ['', Validators.required],
       telefono:          ['', Validators.required],
       fechaCreacion:     ['', Validators.required],
       directorFavorito:  ['', Validators.required],
       actorFavorito:     ['', Validators.required],
       generoPreferido:   ['', Validators.required]
    })            
  }
  
  crearSocio() {
    const SOCIO: socio = {
      nombre: this.socioForm.get('nombre')?.value,
      direccion: this.socioForm.get('direccion')?.value,
      telefono: this.socioForm.get('telefono')?.value,
      fechaCreacion: this.socioForm.get('fechaCreacion')?.value,
      directorFavorito: this.socioForm.get('directorFavorito')?.value,
      actorFavorito: this.socioForm.get('actorFavorito')?.value,
      generoPreferido: this.socioForm.get('generoPreferido')?.value,
    }

    console.log(SOCIO)

    Swal.fire({
      title: 'Creacion de Socio',
      text: "¿Desea crear un socio?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.socioService.crearSocio(SOCIO).subscribe(data =>{
          console.log(data);
          this.router.navigate(['/socios'])
        }) 
      }
    })
  }
}
