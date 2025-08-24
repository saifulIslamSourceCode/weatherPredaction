import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvmModel } from './svm-model';

describe('SvmModel', () => {
  let component: SvmModel;
  let fixture: ComponentFixture<SvmModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvmModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvmModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
