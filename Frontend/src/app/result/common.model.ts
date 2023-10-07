export interface ResultResponse {
    results: Result[];
    racedetails: Race;
  }
  
  export interface Race {
    race_name: string;
    race_date: Date;
    race_location: string;
  }
  
  export interface Result {
    position: number;
    podium: number;
    fastest_lap_rate: number;
    win_rate: number;
    first_name: string;
    last_name: string;
    year_active: number;
    nationality: string;
    point: number;
  }
  