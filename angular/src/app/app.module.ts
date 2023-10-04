import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriverDropDownComponent } from './driver-drop-down/driver-drop-down.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TeamComponent } from './team-details/team-details.component';
import { ResultComponent } from './result/result.component';
import { FormsModule } from '@angular/forms';
import { CircuitComponent } from './circuit/circuit.component';
import { RaceDetailComponent } from './race-detail/race-detail.component';
import { DriverRaceComponent } from './driver-race/driver-race.component';

@NgModule({
  declarations: [
    AppComponent,
    DriverDropDownComponent,
    TeamComponent,
    ResultComponent,
    CircuitComponent,
    RaceDetailComponent,
    DriverRaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





