CREATE DEFINER=`21A_Kessler_inf21128`@`%` PROCEDURE `Wahlinator3000Database`()
BEGIN

START TRANSACTION;

DROP TABLE IF EXISTS Has_Voted_Election;
DROP TABLE IF EXISTS HasRole;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS Election_Political_Party;
DROP TABLE IF EXISTS Election_Political_Member;
DROP TABLE IF EXISTS Election_Political_Member_Votes;
DROP TABLE IF EXISTS Election_Member_Party_Votes;
DROP TABLE IF EXISTS Election;
DROP TABLE IF EXISTS Political_Member;
DROP TABLE IF EXISTS Political_Party;

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

    CREATE TABLE HasRole (
        users_ID INT,
        FOREIGN KEY (users_ID)
            REFERENCES users (ID),
        roles_ID INT,
        FOREIGN KEY (roles_ID)
            REFERENCES roles (ID)
);

	CREATE TABLE Election (
        ID INT AUTO_INCREMENT PRIMARY KEY,
		Type VARCHAR(50),
        Region VARCHAR(50),
        Votes INT,
		Start_Date DATE,
        End_start DATE
);

CREATE TABLE Political_Party (
	ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(50)
);

CREATE TABLE Election_Political_Party (
		Election_ID INT,
        FOREIGN KEY (Election_ID)
            REFERENCES Election (ID),
        Political_Party_ID INT,
        FOREIGN KEY (Political_Party_ID)
            REFERENCES Political_Party (ID)
);

CREATE TABLE Political_Member (
		ID INT AUTO_INCREMENT PRIMARY KEY,
        First_Name VARCHAR(50),
        Last_Name VARCHAR(50),
        Political_Party_ID INT,
        FOREIGN KEY (Political_Party_ID)
            REFERENCES Political_Party (ID)
);

CREATE TABLE Election_Political_Member (
		Election_ID INT,
        FOREIGN KEY (Election_ID)
            REFERENCES Election (ID),
        Political_Member_ID INT,
        FOREIGN KEY (Political_Member_ID)
            REFERENCES Political_Member (ID)
);

CREATE TABLE Has_Voted_Election (
		Users_ID INT,
        FOREIGN KEY (Users_ID)
            REFERENCES users (ID),
		Election_ID INT,
        FOREIGN KEY (Election_ID)
            REFERENCES Election (ID)
);

CREATE TABLE Election_Political_Member_Votes(
		Election_ID INT,
        FOREIGN KEY (Election_ID)
            REFERENCES Election (ID),
		Political_Member_ID INT,
        FOREIGN KEY (Political_Member_ID)
            REFERENCES Political_Member (ID),
		Votes INT
);

CREATE TABLE Election_Member_Party_Votes(
		Election_ID INT,
        FOREIGN KEY (Election_ID)
            REFERENCES Election (ID),
		Political_Party_ID INT,
        FOREIGN KEY (Political_Party_ID)
            REFERENCES Political_Party (ID),
		Votes INT
);

-- FILL DATA
INSERT INTO roles(ID, name) VALUES(1, 'ROLE_USER');
INSERT INTO roles(ID, name) VALUES(2, 'ROLE_MODERATOR');
INSERT INTO roles(ID, name) VALUES(3, 'ROLE_ADMIN');

INSERT INTO users (id, personal_number, first_name, last_name, birthdate, zip_code, password)
VALUES 	(2147483647, "L28771V9V","Corvin","Pape",DATE '2000-05-20',27432,"Passwort");

--    INSERT INTO HatRolle
--    VALUES (1,1);
END