import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonalVariation } from './seasonal-variation';

describe('SeasonalVariation', () => {
  let component: SeasonalVariation;
  let fixture: ComponentFixture<SeasonalVariation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeasonalVariation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonalVariation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
