import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandtagswahlbwComponent } from './landtagswahlbw.component';

describe('LandtagswahlbwComponent', () => {
  let component: LandtagswahlbwComponent;
  let fixture: ComponentFixture<LandtagswahlbwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandtagswahlbwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandtagswahlbwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
