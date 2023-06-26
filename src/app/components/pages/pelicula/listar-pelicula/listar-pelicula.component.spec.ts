import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPeliculaComponent } from './listar-pelicula.component';

describe('ListarPeliculaComponent', () => {
  let component: ListarPeliculaComponent;
  let fixture: ComponentFixture<ListarPeliculaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPeliculaComponent]
    });
    fixture = TestBed.createComponent(ListarPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
