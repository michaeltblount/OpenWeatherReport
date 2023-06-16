import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyforecastComponent } from './hourlyforecast.component';

describe('HourlyforecastComponent', () => {
  let component: HourlyforecastComponent;
  let fixture: ComponentFixture<HourlyforecastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HourlyforecastComponent]
    });
    fixture = TestBed.createComponent(HourlyforecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
