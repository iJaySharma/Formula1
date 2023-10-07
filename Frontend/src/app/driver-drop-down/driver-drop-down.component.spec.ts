import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverDropDownComponent } from './driver-drop-down.component';

describe('DriverDropdownComponent', () => {
  let component: DriverDropDownComponent;
  let fixture: ComponentFixture<DriverDropDownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DriverDropDownComponent]
    });
    fixture = TestBed.createComponent(DriverDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
