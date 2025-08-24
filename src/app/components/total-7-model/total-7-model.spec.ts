import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Total7Model } from './total-7-model';

describe('Total7Model', () => {
  let component: Total7Model;
  let fixture: ComponentFixture<Total7Model>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Total7Model]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Total7Model);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
