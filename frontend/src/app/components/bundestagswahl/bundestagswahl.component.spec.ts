import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BundestagswahlComponent} from './bundestagswahl.component';

describe('BundestagswahlComponent', () => {
  let component: BundestagswahlComponent;
  let fixture: ComponentFixture<BundestagswahlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BundestagswahlComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BundestagswahlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
