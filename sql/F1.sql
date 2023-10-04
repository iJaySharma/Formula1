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
