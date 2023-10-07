import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './team-details/team-details.component';
import { ResultComponent } from './result/result.component';
import { CircuitComponent } from './circuit/circuit.component';
import { RaceDetailComponent } from './race-detail/race-detail.component';
import { DriverRaceComponent } from './driver-race/driver-race.component';

const routes: Routes = [
  { path: 'team-details', component: TeamComponent },
  { path: 'results/:raceId', component: ResultComponent },
  { path: ':location', component: RaceDetailComponent },
  { path: 'drivers/:race_id', component: DriverRaceComponent},
  { path: '', component: CircuitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
