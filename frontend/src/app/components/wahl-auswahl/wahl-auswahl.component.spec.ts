import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WahlAuswahlComponent} from './wahl-auswahl.component';

describe('WahlAuswahlComponent', () => {
  let component: WahlAuswahlComponent;
  let fixture: ComponentFixture<WahlAuswahlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WahlAuswahlComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WahlAuswahlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
