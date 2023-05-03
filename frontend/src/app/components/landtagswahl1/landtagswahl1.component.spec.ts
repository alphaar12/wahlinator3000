import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landtagswahl1Component } from './landtagswahl1.component';

describe('Landtagswahl1Component', () => {
  let component: Landtagswahl1Component;
  let fixture: ComponentFixture<Landtagswahl1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Landtagswahl1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landtagswahl1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
