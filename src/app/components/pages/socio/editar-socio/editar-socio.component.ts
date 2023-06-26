import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SocioService } from 'src/app/services/socio.service';
import { socio } from 'src/app/models/socio';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editar-socio',
  templateUrl: './editar-socio.component.html',
  styleUrls: ['./editar-socio.component.css']
})
export class EditarSocioComponent implements OnInit {

  socioForm: FormGroup;
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private aRouter: ActivatedRoute,
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
    this.id = aRouter.snapshot.paramMap.get('id');          
  }

  ngOnInit(): void {
    this.validarId()
  }

  validarId(){
    if(this.id !== null){
      this.socioService.obtenerSocio(this.id).subscribe(data => {
        this.socioForm.setValue({
          nombre: data.nombre,
          direccion: data.direccion,
          telefono: data.telefono,
          fechaCreacion: data.fechaCreacion,
          directorFavorito: data.directorFavorito,
          actorFavorito: data.actorFavorito,
          generoPreferido: data.generoPreferido
        })
      })
    }
  }

  editarSocio(){
    const SOCIO: socio = {
      nombre: this.socioForm.get('nombre')?.value,
      direccion: this.socioForm.get('direccion')?.value,
      telefono: this.socioForm.get('telefono')?.value,
      fechaCreacion: this.socioForm.get('fechaCreacion')?.value,
      directorFavorito: this.socioForm.get('directorFavorito')?.value,
      actorFavorito: this.socioForm.get('actorFavorito')?.value,
      generoPreferido: this.socioForm.get('generoPreferido')?.value,
    }
    Swal.fire({
      title: 'Actualizacion de Socio',
      text: "¿Desea actualizar al socio?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        if(this.id !== null){
          this.socioService.actualizarSocio(this.id, SOCIO).subscribe(data => {
              console.log(SOCIO);
              this.router.navigate(['/socios']) 
          })
        }
      }
    })
  }
}
