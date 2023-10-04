import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Circuit } from './circuit.model'; 

@Component({
  selector: 'app-circuit',
  templateUrl: './circuit.component.html',
  styleUrls: ['./circuit.component.css']
})
export class CircuitComponent implements OnInit {

  circuits : Circuit[] = [] ;
  error: string | null = null;

  constructor(private http: HttpClient) {}

ngOnInit():void {
  this.http
      .get<Circuit[]>('http://localhost:3000/api/circuits')
      .pipe(
        catchError((error) => {
          this.error = 'Error fetching race data. Please try again later.';
          return throwError(error);
        })
      )
      .subscribe((data) => {
        this.circuits = data;
      });
}
}  

