import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutzerAnlegenComponent } from './nutzer-anlegen.component';

describe('NutzerAnlegenComponent', () => {
  let component: NutzerAnlegenComponent;
  let fixture: ComponentFixture<NutzerAnlegenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutzerAnlegenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutzerAnlegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
