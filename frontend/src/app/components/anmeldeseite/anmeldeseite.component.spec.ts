import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnmeldeseiteComponent } from './anmeldeseite.component';

describe('AnmeldeseiteComponent', () => {
  let component: AnmeldeseiteComponent;
  let fixture: ComponentFixture<AnmeldeseiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnmeldeseiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnmeldeseiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
