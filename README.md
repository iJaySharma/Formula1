# Formula1 Racing Overview 
```
This is a full stack web application called as F1 Driver DashBoard
this is a dashboard project represents the Formula 1 Racing Statistics
Based on Drivers Teams Races LeaderBoards Participants Circuits Seaoson/Year Played 
User can select multiple dimension to borrow the details as in particular about the races and their results
teams and their driver belongings circuit and their associated played races drivers participations/leaderboard etc
```
## Features Guide
<ul>
<li>Initial application presents you with welcome page of Circuits with detail as lenght capacity zone name user can navigate through races played in circuits by selecting <strong>[see races played here]</strong> to get list of them with select option <strong>[see driver participants]</strong> and <strong>[see leaderboard]</strong> respective to race to do analysis so far </li>
<li>It contains Driver Component user can select <strong>[Driver Name]</strong> and on click he/she will get presented modal feature with drivers details and associated team details</li>
<li>It has feature of select option to select through season year for result on selection it will present you with <strong>[see leaderboard] button</strong> on click user can analyze the drivers wins podiums positions & so many other involving factor to see statistics comparison </li>  
<li>It contains the Team link to navigate through list of Teams with details like country represent engine supplier etc with <strong>[see associated driver]</strong> option to see belonging driver and their personal details</li>
</ul>

## Let's Get Started 
* DownLoad [Latest Node Version](https://nodejs.org/en/download)
* Setup [MySql](https://www.mysql.com/)
* Get [Angular](https://angular.io/)

## MySql Configuration 
### config.json
```
{
  "development": {
    "dialect": "mysql/mariadb/posgres",
    "host": "localhost",
    "username": "username",
    "password": "password",
    "database": "database"
  }
}
```
### Reference table 
```
CREATE TABLE circuit (
    circuit_name CHAR(40) UNIQUE,
    location CHAR(40) PRIMARY KEY,
    length DECIMAL(10, 2),
    capacity INT
);

CREATE TABLE race (
    race_id INT PRIMARY KEY AUTO_INCREMENT,
    race_name CHAR(40) UNIQUE,
    race_date DATE UNIQUE,
    race_season YEAR UNIQUE,
    race_location CHAR(40),
    FOREIGN KEY (race_location) REFERENCES circuit(location)
);

CREATE TABLE team (
    team_id INT PRIMARY KEY AUTO_INCREMENT,
    team_name CHAR(40) UNIQUE,
    principal TEXT,
    engine_supplier CHAR(40),
    country_represent CHAR(40)
);

CREATE TABLE driver (
    driver_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name CHAR(40),
    last_name CHAR(40),
    year_active INT,
    nationality CHAR(40),
    point DECIMAL(10, 2),
    team_id INT,
    FOREIGN KEY (team_id) REFERENCES team(team_id)
);

CREATE TABLE DriverRace (
    driver_id INT,
    race_id INT,
    PRIMARY KEY (driver_id, race_id),
    FOREIGN KEY (driver_id) REFERENCES driver(driver_id),
    FOREIGN KEY (race_id) REFERENCES race(race_id)
);

CREATE TABLE result (
    position INT,
    podium INT,
    fastest_lap_rate DECIMAL(10, 2),
    win_rate DECIMAL(10, 5),
    race_id INT,
    driver_id INT,
    FOREIGN KEY (driver_id) REFERENCES driver(driver_id),
    FOREIGN KEY (race_id) REFERENCES race(race_id)
);
```
## Important Build Commands
```
npm install                         npm install -g @angular/cli     
npm install sequelize               ng generate component component-name
npm install mysql2                  ng serve
node app.js                         ng build --prod
npm install express                 ng add @ng-bootstrap/ng-bootstrap
```

