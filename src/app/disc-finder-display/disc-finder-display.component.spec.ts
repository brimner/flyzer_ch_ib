import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscFinderDisplayComponent } from './disc-finder-display.component';

describe('DiscFinderDisplayComponent', () => {
  let component: DiscFinderDisplayComponent;
  let fixture: ComponentFixture<DiscFinderDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscFinderDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscFinderDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
