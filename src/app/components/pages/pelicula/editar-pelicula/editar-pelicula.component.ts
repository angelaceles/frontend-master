import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { ActivatedRoute, Router } from '@angular/router';
import { pelicula } from 'src/app/models/pelicula';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {
  
  peliculaForm: FormGroup;
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private aRouter: ActivatedRoute,
              public peliculaService: PeliculaService){
    this.peliculaForm = this.fb.group({
         titulo:   ['', Validators.required],
         genero:   ['', Validators.required],
         director: ['', Validators.required],
         actores:  ['', Validators.required],
         copias:  ['', Validators.required]
    })  
    this.id = aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.validarId()
  }

  validarId(){
    if(this.id !== null){
      this.peliculaService.obtenerPelicula(this.id).subscribe(data => {
        this.peliculaForm.setValue({
          titulo: data.titulo,
          genero: data.genero,
          director: data.director,
          actores: data.actores,
          copias: data.copias,
        })
      })
    }
  }

  editarPelicula(){
    const PELICULA: pelicula = {
      titulo: this.peliculaForm.get('titulo')?.value,
      genero: this.peliculaForm.get('genero')?.value,
      director: this.peliculaForm.get('director')?.value,
      actores: this.peliculaForm.get('actores')?.value,
      copias: this.peliculaForm.get('copias')?.value,
    }

    Swal.fire({
      title: 'Actualizacion de Pelicula',
      text: "¿Desea actualizar la pelicula?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        if(this.id !== null){
          this.peliculaService.actualizarPelicula(this.id, PELICULA).subscribe(data => {
              console.log(PELICULA);
              this.router.navigate(['/peliculas']) 
          })
        }
      }
    })
  }
}
