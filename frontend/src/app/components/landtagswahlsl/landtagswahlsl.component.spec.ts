import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandtagswahlslComponent } from './landtagswahlsl.component';

describe('LandtagswahlslComponent', () => {
  let component: LandtagswahlslComponent;
  let fixture: ComponentFixture<LandtagswahlslComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandtagswahlslComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandtagswahlslComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
