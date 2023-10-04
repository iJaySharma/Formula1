import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  races: any[] = [];
  seasons: string[] = [];
  selectedSeason: string | null = "";
  selectedRaceId: number | null = null;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchRaces();
  }


  

  fetchRaces(): void {
    this.http
      .get<any[]>('http://localhost:3000/api/races')
      .pipe(
        catchError((error) => {
          this.error = 'Error fetching race data. Please try again later.';
          return throwError(error);
        })
      )
      .subscribe((data) => {
        this.races = data;
        this.seasons = this.extractUniqueSeasons(data);
      });
  }

  extractUniqueSeasons(races: any[]): string[] {
    const uniqueSeasons = [...new Set(races.map(race => race.race_season))];
    return uniqueSeasons;
  }

  selectSeason(season: string): void {
    this.selectedSeason = season;

    this.selectedRaceId = this.findRaceIdBySeason(season);
  }

  findRaceIdBySeason(selectedSeason: string): number | null {

    const race = this.races.find(race => race.race_season == selectedSeason);
    return race ? race.race_id : null;
  }
}
