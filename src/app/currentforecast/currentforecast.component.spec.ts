import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentforecastComponent } from './currentforecast.component';

describe('CurrentforecastComponent', () => {
  let component: CurrentforecastComponent;
  let fixture: ComponentFixture<CurrentforecastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentforecastComponent]
    });
    fixture = TestBed.createComponent(CurrentforecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
