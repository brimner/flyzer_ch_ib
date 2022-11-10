import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBagDisplayComponent } from './my-bag-display.component';

describe('MyBagDisplayComponent', () => {
  let component: MyBagDisplayComponent;
  let fixture: ComponentFixture<MyBagDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBagDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyBagDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
