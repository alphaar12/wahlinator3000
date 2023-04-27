START TRANSACTION;

DROP TABLE IF EXISTS Has_Voted_Election;
DROP TABLE IF EXISTS HasRole;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS Election_Political_Party;
DROP TABLE IF EXISTS Election_Political_Member;
DROP TABLE IF EXISTS Election_Political_Member_Votes;
DROP TABLE IF EXISTS Election_Political_Party_Votes;
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
        Description VARCHAR(50),
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

CREATE TABLE Election_Political_Party_Votes(
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

-- Political Partys
INSERT INTO Political_Party(Name) VALUES('CDU'); -- 1
INSERT INTO Political_Party(Name) VALUES('SPD'); -- 2
INSERT INTO Political_Party(Name) VALUES('FDP'); -- 3
INSERT INTO Political_Party(Name) VALUES('DIE LINKE'); -- 4
INSERT INTO Political_Party(Name) VALUES('GRÜNE'); -- 5
INSERT INTO Political_Party(Name) VALUES('AfD'); -- 6
INSERT INTO Political_Party(Name) VALUES('Die PARTEI'); -- 7
INSERT INTO Political_Party(Name) VALUES('ÖDP'); -- 8
INSERT INTO Political_Party(Name) VALUES('V-Partei'); -- 9
INSERT INTO Political_Party(Name) VALUES('DieBasis'); -- 10
INSERT INTO Political_Party(Name) VALUES('Tierschutzpartei'); -- 11
INSERT INTO Political_Party(Name) VALUES('NPD'); -- 12
INSERT INTO Political_Party(Name) VALUES('FREIE WÄHLER'); -- 13
INSERT INTO Political_Party(Name) VALUES('PIRATEN'); -- 14
INSERT INTO Political_Party(Name) VALUES('MLPD'); -- 15
INSERT INTO Political_Party(Name) VALUES('Bündnis C'); -- 16
INSERT INTO Political_Party(Name) VALUES('III. Weg'); -- 17
INSERT INTO Political_Party(Name) VALUES('DKP'); -- 18
INSERT INTO Political_Party(Name) VALUES('Die Humanisten'); -- 19
INSERT INTO Political_Party(Name) VALUES('Gesundheitsforschung'); -- 20
INSERT INTO Political_Party(Name) VALUES('Team Todenhöfer'); -- 21
INSERT INTO Political_Party(Name) VALUES('Volt'); -- 22

-- Political Members
INSERT INTO Political_Member(First_Name, Last_Name, Description, Political_Party_ID) VALUES('Michael', 'Klonovsky', 'Autor', 6); -- 1
INSERT INTO Political_Member(First_Name, Last_Name, Description, Political_Party_ID) VALUES('Frank', 'Heinrich', 'Bundestagsabgeordneter', 1); -- 2
INSERT INTO Political_Member(First_Name, Last_Name, Description, Political_Party_ID) VALUES('Tim', 'Detzner', 'Angestellter', 4); -- 3
INSERT INTO Political_Member(First_Name, Last_Name, Description, Political_Party_ID) VALUES('Detlef', 'Müller', 'Lokomotivführer', 2); -- 4
INSERT INTO Political_Member(First_Name, Last_Name, Description, Political_Party_ID) VALUES('Frank', 'Müller-Rosentritt', 'Bundestagsabgeordneter', 3); -- 5
INSERT INTO Political_Member(First_Name, Last_Name, Description, Political_Party_ID) VALUES('Karola', 'Köpferl', 'Sozialpädagogin', 5); -- 6
INSERT INTO Political_Member(First_Name, Last_Name, Description, Political_Party_ID) VALUES('Paul Thomas', 'Vogel', 'Diplom-Ingenuer', 7); -- 7
INSERT INTO Political_Member(First_Name, Last_Name, Description, Political_Party_ID) VALUES('Bert', 'Rohne', 'Staatlich anerkannter Sozialpädagoge', 8); -- 8
INSERT INTO Political_Member(First_Name, Last_Name, Description, Political_Party_ID) VALUES('Thomas', 'Lörinczy', 'Kaufmann', 9); -- 9
INSERT INTO Political_Member(First_Name, Last_Name, Description, Political_Party_ID) VALUES('Norman', 'Lienow', 'DV-Kaufmann', 10); -- 10
INSERT INTO Political_Member(First_Name, Last_Name, Description, Political_Party_ID) VALUES('Daniel', 'Richter', 'Diplom-Informatiker', Null); -- 11
INSERT INTO Political_Member(First_Name, Last_Name, Description, Political_Party_ID) VALUES('Jörg Alexander', 'Weidemann', 'Krankenpfleger', Null); -- 12
INSERT INTO Political_Member(First_Name, Last_Name, Description, Political_Party_ID) VALUES('Hans Sieghard', 'Röhder', 'Controller IHK', Null); -- 13
-- INSERT INTO Political_Member(First_Name, Last_Name, Description, Political_Party_ID) VALUES('', '', '', ); -- 

-- Elections
-- Bundestagswahl
INSERT INTO Election(Type, Region, Votes, Start_Date, End_start) VALUES('Bundestagswahl', 'Deutschland', 2, '2023.04.01', '2023.10.01');

-- Election Political Party
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID) VALUES(1, 1);
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID) VALUES(1, 2);
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID) VALUES(1, 3);
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID) VALUES(1, 4);
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID) VALUES(1, 5);
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID) VALUES(1, 6);
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID) VALUES(1, 7);
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID) VALUES(1, 8);
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID) VALUES(1, 9);
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID) VALUES(1, 10);
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID) VALUES(1, 11);
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID) VALUES(1, 12);
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID) VALUES(1, 13);
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID) VALUES(1, 14);
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID) VALUES(1, 15);
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID) VALUES(1, 16);
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID) VALUES(1, 17);
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID) VALUES(1, 18);
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID) VALUES(1, 19);
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID) VALUES(1, 20);
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID) VALUES(1, 21);
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID) VALUES(1, 22);

-- Election Political Member
INSERT INTO Election_Political_Member(Election_ID, Political_Member_ID) VALUES(1, 1);
INSERT INTO Election_Political_Member(Election_ID, Political_Member_ID) VALUES(1, 2);
INSERT INTO Election_Political_Member(Election_ID, Political_Member_ID) VALUES(1, 3);
INSERT INTO Election_Political_Member(Election_ID, Political_Member_ID) VALUES(1, 4);
INSERT INTO Election_Political_Member(Election_ID, Political_Member_ID) VALUES(1, 5);
INSERT INTO Election_Political_Member(Election_ID, Political_Member_ID) VALUES(1, 6);
INSERT INTO Election_Political_Member(Election_ID, Political_Member_ID) VALUES(1, 7);
INSERT INTO Election_Political_Member(Election_ID, Political_Member_ID) VALUES(1, 8);
INSERT INTO Election_Political_Member(Election_ID, Political_Member_ID) VALUES(1, 9);
INSERT INTO Election_Political_Member(Election_ID, Political_Member_ID) VALUES(1, 10);
INSERT INTO Election_Political_Member(Election_ID, Political_Member_ID) VALUES(1, 11);
INSERT INTO Election_Political_Member(Election_ID, Political_Member_ID) VALUES(1, 12);
INSERT INTO Election_Political_Member(Election_ID, Political_Member_ID) VALUES(1, 13);

INSERT INTO users (id, personal_number, first_name, last_name, birthdate, zip_code, password)
VALUES 	(2147483647, "L28771V9V","Corvin","Pape",DATE '2000-05-20',27432,"Passwort");

--    INSERT INTO HatRolle
--    VALUES (1,1);