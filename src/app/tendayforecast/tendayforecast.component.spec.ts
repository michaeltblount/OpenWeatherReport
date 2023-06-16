import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TendayforecastComponent } from './tendayforecast.component';

describe('TendayforecastComponent', () => {
  let component: TendayforecastComponent;
  let fixture: ComponentFixture<TendayforecastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TendayforecastComponent]
    });
    fixture = TestBed.createComponent(TendayforecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
