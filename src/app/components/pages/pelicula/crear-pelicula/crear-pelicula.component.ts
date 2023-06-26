import { Component } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { pelicula } from 'src/app/models/pelicula';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent{

  peliculaForm: FormGroup;
  
  constructor(private fb: FormBuilder,
              private router: Router,
              public peliculaService: PeliculaService) {
    this.peliculaForm = this.fb.group({
         titulo:   ['', Validators.required],
         genero:   ['', Validators.required],
         director: ['', Validators.required],
         actores:  ['', Validators.required],
         copias:  ['', Validators.required],
    })            
  }

  crearPelicula() {
    const PELICULA: pelicula = {
      titulo: this.peliculaForm.get('titulo')?.value,
      genero: this.peliculaForm.get('genero')?.value,
      director: this.peliculaForm.get('director')?.value,
      actores: this.peliculaForm.get('actores')?.value,
      copias: this.peliculaForm.get('copias')?.value,
    }

    console.log(PELICULA)

    Swal.fire({
      title: 'Creacion de Pelicula',
      text: "¿Desea crear la Pelicula?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.peliculaService.crearPelicula(PELICULA).subscribe(data =>{
          console.log(data);
          this.router.navigate(['/peliculas'])
        }) 
      }
    })
  }
}
