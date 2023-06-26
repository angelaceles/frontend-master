import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSocioComponent } from './editar-socio.component';

describe('EditarSocioComponent', () => {
  let component: EditarSocioComponent;
  let fixture: ComponentFixture<EditarSocioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarSocioComponent]
    });
    fixture = TestBed.createComponent(EditarSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
