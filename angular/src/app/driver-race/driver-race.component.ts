import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';
import { Driver } from './driver.model';

@Component({
  selector: 'app-driver-race',
  templateUrl: './driver-race.component.html',
  styleUrls: ['./driver-race.component.css']
})
export class DriverRaceComponent implements OnInit {
  error: string | null = null;
  driverrace: Driver[] = []; 

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
  
    this.route.paramMap.subscribe(params => {
      const selectedRaceId = params.get('race_id');

      const url = `http://localhost:3000/api/driversRace/drivers/${selectedRaceId}`;

      this.http
        .get<Driver>(url)
        .pipe(
          catchError((error) => {
            this.error = 'Error fetching result data. Please try again later.';
            return throwError(error);
          })
        )
        .subscribe((data) => {
          this.driverrace = [data];
        });
    });
  }
}
