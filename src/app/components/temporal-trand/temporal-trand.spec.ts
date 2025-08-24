import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporalTrand } from './temporal-trand';

describe('TemporalTrand', () => {
  let component: TemporalTrand;
  let fixture: ComponentFixture<TemporalTrand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemporalTrand]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemporalTrand);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
