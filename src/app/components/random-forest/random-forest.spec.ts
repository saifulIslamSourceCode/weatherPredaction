import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomForest } from './random-forest';

describe('RandomForest', () => {
  let component: RandomForest;
  let fixture: ComponentFixture<RandomForest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomForest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomForest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
