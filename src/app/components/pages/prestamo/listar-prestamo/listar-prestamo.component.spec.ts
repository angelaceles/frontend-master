import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPrestamoComponent } from './listar-prestamo.component';

describe('ListarPrestamoComponent', () => {
  let component: ListarPrestamoComponent;
  let fixture: ComponentFixture<ListarPrestamoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPrestamoComponent]
    });
    fixture = TestBed.createComponent(ListarPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
