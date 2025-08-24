import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtremeWeather } from './extreme-weather';

describe('ExtremeWeather', () => {
  let component: ExtremeWeather;
  let fixture: ComponentFixture<ExtremeWeather>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtremeWeather]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtremeWeather);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
