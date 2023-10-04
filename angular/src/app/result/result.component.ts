import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ResultResponse, Race, Result } from './common.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  error: string | null = null;
  results: Result[] = [];
  racedetails: Race = {
    race_name: '',
    race_date: new Date(),
    race_location: '',
  };

  constructor(private http: HttpClient, private route: ActivatedRoute) {} 


  ngOnInit() {
    // Use ActivatedRoute to get the selectedRaceId from the route parameters
    this.route.paramMap.subscribe(params => {
      const selectedRaceId = params.get('raceId');

      // Now you can interpolate the selectedRaceId into the URL
      const url = `http://localhost:3000/api/result/drivers/${selectedRaceId}`;

      this.http
        .get<ResultResponse>(url)
        .pipe(
          catchError((error) => {
            this.error = 'Error fetching result data. Please try again later.';
            return throwError(error);
          })
        )
        .subscribe((data) => {
          console.log(data);
          this.results = data.results;
          this.racedetails = data.racedetails;
          this.results.sort((a, b) => a.position - b.position);
        });
    });
  }
}
