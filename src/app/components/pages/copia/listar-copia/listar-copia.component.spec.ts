import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCopiaComponent } from './listar-copia.component';

describe('ListarCopiaComponent', () => {
  let component: ListarCopiaComponent;
  let fixture: ComponentFixture<ListarCopiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarCopiaComponent]
    });
    fixture = TestBed.createComponent(ListarCopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
