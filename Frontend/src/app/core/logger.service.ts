// logger.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log(event: string, data: any) {
    // Implement the logic to log the event and associated data here
    console.log(`Event: ${event}`, data);
  }
}
