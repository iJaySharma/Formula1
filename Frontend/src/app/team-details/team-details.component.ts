import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Team } from './team.model';
import { Driver } from './driver.model';


@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html', 
  styleUrls: ['./team-details.component.css'],
})


export class TeamComponent implements OnInit {
  teams: Team[] = [];
  drivers: Driver[] = [];
  error: string | null = null;
  showDriversTable: boolean = false;

  @ViewChild('driversTable') driversTable!: ElementRef;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchTeams();
  }

  fetchTeams(): void {
    const apiUrl = 'http://localhost:3000/api/teams';

    this.http.get<Team[]>(apiUrl).pipe(
      catchError((error) => {
        this.error = 'Error fetching teams. Please try again later.';
        return throwError(error);
      })
    ).subscribe(
      (data) => {
        // Sorted teams based on 'country_represent' lexicographically
        this.teams = data.sort((a, b) => a.country_represent.localeCompare(b.country_represent));
        console.log('test',this.teams);
      },
      (error) => {
        console.error('Error fetching teams:', error);
        this.error = 'Error fetching teams. Please try again later.';
      }
    );
  }
  seeAssociatedDrivers(teamId: number): void {
    // Make an HTTP request to fetch associated drivers for the team
    this.http.get<Driver[]>(`http://localhost:3000/api/drivers/team/${teamId}`).pipe(
      catchError((error) => {
        console.error('Error fetching associated drivers:', error);
        
        this.error = 'Error fetching associated drivers. Please try again later.';
        return throwError(error);
      })
    ).subscribe(
      (drivers) => {
        this.drivers = drivers;
      this.showDriversTable = true;
      }
    );
  }
  
}
