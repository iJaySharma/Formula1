import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Driver } from './driver.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-driver-drop-down',
  templateUrl: './driver-drop-down.component.html',
  styleUrls: ['./driver-drop-down.component.css']
})
export class DriverDropDownComponent implements OnInit {
  @Input() drivers: Driver[] = [];
  error: string | null = null;
  selectedDriver: Driver | null = null;

  constructor(private modalService: NgbModal, private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Driver[]>('http://localhost:3000/api/drivers')
      .pipe(
        catchError((error) => {
        
          this.error = 'Error fetching driver data. Please try again later.';
          return throwError(error); 
        })
      )
      .subscribe((data) => {
        
        this.drivers = data;


        this.drivers.sort((a, b) => a.first_name.localeCompare(b.first_name));
      
      });
  }

  openDriverDetailsModal(driver: Driver) {
    this.selectedDriver = driver;
    
    document.getElementById('driverDetailsModal')?.classList.add('show');
  }

  closeDriverDetailsModal() {
    this.modalService.dismissAll();
  }
  
}
