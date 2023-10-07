import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Race } from './race.model'; 
@Component({
  selector: 'app-race-detail',
  templateUrl: './race-detail.component.html',
  styleUrls: ['./race-detail.component.css']
})
export class RaceDetailComponent implements OnInit {

  races : Race[] = [] ;
  error: string | null = null;

  constructor(private http: HttpClient, private route: ActivatedRoute) {} 

ngOnInit():void {
  this.route.paramMap.subscribe(params => {
    const race_location = params.get('location');

    const url = `http://localhost:3000/api/races/${race_location}`;

  this.http
      .get<Race[]>(url)
      .pipe(
        catchError((error) => {
          this.error = 'Error fetching race data. Please try again later.';
          return throwError(error);
        })
      )
      .subscribe((data) => {
        this.races = data;
      });
    });
}
}
  
