// driver.model.ts

export interface Driver {
    driver_id: number;
    first_name: string;
    last_name: string;
    year_active: number;
    nationality: string;
    point: string;
    team_id: number;
    Team: {
      team_name: string;
      principal: string;
      engine_supplier: string;
      country_represent: string;
    };
  }
  