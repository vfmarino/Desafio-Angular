import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenetHeaderComponent } from './componenet-header.component';

describe('ComponenetHeaderComponent', () => {
  let component: ComponenetHeaderComponent;
  let fixture: ComponentFixture<ComponenetHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenetHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenetHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
