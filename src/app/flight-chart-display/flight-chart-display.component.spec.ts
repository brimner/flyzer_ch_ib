import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightChartDisplayComponent } from './flight-chart-display.component';

describe('FlightChartDisplayComponent', () => {
  let component: FlightChartDisplayComponent;
  let fixture: ComponentFixture<FlightChartDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightChartDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightChartDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
