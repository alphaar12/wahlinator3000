import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutzerBearbeitenComponent } from './nutzer-bearbeiten.component';

describe('NutzerBearbeitenComponent', () => {
  let component: NutzerBearbeitenComponent;
  let fixture: ComponentFixture<NutzerBearbeitenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutzerBearbeitenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutzerBearbeitenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
