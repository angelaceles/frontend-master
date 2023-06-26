import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { TasksComponent } from './components/tasks/tasks.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ListarPeliculaComponent } from './components/pages/pelicula/listar-pelicula/listar-pelicula.component';
import { EditarPeliculaComponent } from './components/pages/pelicula/editar-pelicula/editar-pelicula.component';
import { CrearPeliculaComponent } from './components/pages/pelicula/crear-pelicula/crear-pelicula.component';
import { ListarSocioComponent } from './components/pages/socio/listar-socio/listar-socio.component';
import { CrearSocioComponent } from './components/pages/socio/crear-socio/crear-socio.component';
import { EditarSocioComponent } from './components/pages/socio/editar-socio/editar-socio.component';
import { ListarCopiaComponent } from './components/pages/copia/listar-copia/listar-copia.component';
import { ListarPrestamoComponent } from './components/pages/prestamo/listar-prestamo/listar-prestamo.component';
import { CrearCopiaComponent } from './components/pages/copia/crear-copia/crear-copia.component';
import { CrearPrestamoComponent } from './components/pages/prestamo/crear-prestamo/crear-prestamo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  

  {
    path: 'peliculas',
    component: ListarPeliculaComponent
  },
  {
    path: 'editar-pelicula/:id',
    component: EditarPeliculaComponent
  },
  {
    path: 'crear-pelicula',
    component: CrearPeliculaComponent
  },


  {
    path: 'socios',
    component: ListarSocioComponent
  },
  {
    path: 'editar-socio/:id',
    component: EditarSocioComponent
  },
  {
    path: 'crear-socios',
    component: CrearSocioComponent
  },


  {
    path: 'copias',
    component: ListarCopiaComponent
  },
  {
    path: 'crear-copias',
    component: CrearCopiaComponent
  },


  {
    path: 'prestamos',
    component: ListarPrestamoComponent
  },
  {
    path: 'crear-prestamo',
    component: CrearPrestamoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
