import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelComparison } from './model-comparison';

describe('ModelComparison', () => {
  let component: ModelComparison;
  let fixture: ComponentFixture<ModelComparison>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelComparison]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelComparison);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
