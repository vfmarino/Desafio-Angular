import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentListaComponent } from './component-lista.component';

describe('ComponentListaComponent', () => {
  let component: ComponentListaComponent;
  let fixture: ComponentFixture<ComponentListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
