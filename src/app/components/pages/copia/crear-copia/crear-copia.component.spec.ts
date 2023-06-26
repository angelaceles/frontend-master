import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCopiaComponent } from './crear-copia.component';

describe('CrearCopiaComponent', () => {
  let component: CrearCopiaComponent;
  let fixture: ComponentFixture<CrearCopiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearCopiaComponent]
    });
    fixture = TestBed.createComponent(CrearCopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
