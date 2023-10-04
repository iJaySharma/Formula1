import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamComponent } from './team-details.component';

describe('TeamDetailsComponent', () => {
  let component: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamComponent]
    });
    fixture = TestBed.createComponent(TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
