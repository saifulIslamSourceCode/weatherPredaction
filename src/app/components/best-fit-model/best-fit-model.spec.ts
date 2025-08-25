import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestFitModel } from './best-fit-model';

describe('BestFitModel', () => {
  let component: BestFitModel;
  let fixture: ComponentFixture<BestFitModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestFitModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestFitModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
