START TRANSACTION;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS HatRolle;
DROP TABLE IF EXISTS HatGewaehlt;
DROP TABLE IF EXISTS ParteiErgebnis;
DROP TABLE IF EXISTS PolitikerErgebnis;
DROP TABLE IF EXISTS Wahl;
DROP TABLE IF EXISTS Partei;
DROP TABLE IF EXISTS Politiker;

-- CREATE TABLES
CREATE TABLE users (
	ID INT AUTO_INCREMENT PRIMARY KEY,
    personal_number VARCHAR(50),
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    birthdate DATE,
    zip_code INT,
    password VARCHAR(150)
);

CREATE TABLE roles (
	ID INT PRIMARY KEY,
    name VARCHAR(50)
);

--    CREATE TABLE HatRolle (
--        AccountID INT,
--        FOREIGN KEY (AccountID)
--            REFERENCES users (ID),
--        RollenID INT,
--        FOREIGN KEY (RollenID)
--            REFERENCES roles (ID)
--    );
--
--    CREATE TABLE Wahl (
--        ID INT AUTO_INCREMENT PRIMARY KEY,
--        Typ INT,
--        StartDatum DATE,
--        EndDatum DATE
--    );
--
--    CREATE TABLE HatGewaehlt (
--        ID INT,
--        FOREIGN KEY (ID)
--            REFERENCES users (ID)
--    );
--
--    CREATE TABLE Partei (
--        ID INT AUTO_INCREMENT PRIMARY KEY,
--        ParteiName VARCHAR(50)
--    );
--
--    CREATE TABLE Politiker (
--        ID INT AUTO_INCREMENT PRIMARY KEY,
--        PolitikerName VARCHAR(50),
--        PolitikerVorname VARCHAR(50)
--    );
--
--    CREATE TABLE ParteiErgebnis (
--        ParteiID INT,
--        WahlID INT,
--        FOREIGN KEY (ParteiID)
--            REFERENCES Partei (ID),
--        FOREIGN KEY (WahlID)
--            REFERENCES Wahl (ID)
--    );
--
--    CREATE TABLE PolitikerErgebnis (
--        PolitikerID INT,
--        WahlID INT,
--        FOREIGN KEY (PolitikerID)
--            REFERENCES Politiker (ID),
--        FOREIGN KEY (WahlID)
--            REFERENCES Wahl (ID)
--    );

-- FILL DATA
INSERT INTO roles(ID, name) VALUES(1, 'ROLE_USER');
INSERT INTO roles(ID, name) VALUES(2, 'ROLE_MODERATOR');
INSERT INTO roles(ID, name) VALUES(3, 'ROLE_ADMIN');

INSERT INTO users (id, personal_number, first_name, last_name, birthdate, zip_code, password)
VALUES 	(2147483647, "L28771V9V","Corvin","Pape",DATE '2000-05-20',27432,"Passwort");

--    INSERT INTO HatRolle
--    VALUES (1,1);