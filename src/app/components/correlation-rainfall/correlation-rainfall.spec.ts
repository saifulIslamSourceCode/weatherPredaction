import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrelationRainfall } from './correlation-rainfall';

describe('CorrelationRainfall', () => {
  let component: CorrelationRainfall;
  let fixture: ComponentFixture<CorrelationRainfall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorrelationRainfall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrelationRainfall);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
