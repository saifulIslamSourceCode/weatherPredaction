import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationWiseComparison } from './station-wise-comparison';

describe('StationWiseComparison', () => {
  let component: StationWiseComparison;
  let fixture: ComponentFixture<StationWiseComparison>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationWiseComparison]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationWiseComparison);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
