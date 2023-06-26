import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { CrearPeliculaComponent } from './components/pages/pelicula/crear-pelicula/crear-pelicula.component';
import { EditarPeliculaComponent } from './components/pages/pelicula/editar-pelicula/editar-pelicula.component';
import { ListarPeliculaComponent } from './components/pages/pelicula/listar-pelicula/listar-pelicula.component';
import { CrearCopiaComponent } from './components/pages/copia/crear-copia/crear-copia.component';
import { ListarCopiaComponent } from './components/pages/copia/listar-copia/listar-copia.component';
import { ListarSocioComponent } from './components/pages/socio/listar-socio/listar-socio.component';
import { EditarSocioComponent } from './components/pages/socio/editar-socio/editar-socio.component';
import { CrearSocioComponent } from './components/pages/socio/crear-socio/crear-socio.component';
import { CrearPrestamoComponent } from './components/pages/prestamo/crear-prestamo/crear-prestamo.component';
import { ListarPrestamoComponent } from './components/pages/prestamo/listar-prestamo/listar-prestamo.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    TasksComponent,
    CrearPeliculaComponent,
    EditarPeliculaComponent,
    ListarPeliculaComponent,
    CrearCopiaComponent,
    ListarCopiaComponent,
    ListarSocioComponent,
    EditarSocioComponent,
    CrearSocioComponent,
    CrearPrestamoComponent,
    ListarPrestamoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
