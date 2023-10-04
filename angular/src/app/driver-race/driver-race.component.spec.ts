import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverRaceComponent } from './driver-race.component';

describe('DriverRaceComponent', () => {
  let component: DriverRaceComponent;
  let fixture: ComponentFixture<DriverRaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DriverRaceComponent]
    });
    fixture = TestBed.createComponent(DriverRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
