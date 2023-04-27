START TRANSACTION;

DROP TABLE IF EXISTS Has_Voted_Election;
DROP TABLE IF EXISTS HasRole;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS Election_Political_Party;
DROP TABLE IF EXISTS Election_Political_Member;
DROP TABLE IF EXISTS Election_Political_Member_Votes;
DROP TABLE IF EXISTS Election_Political_Party_Votes;
DROP TABLE IF EXISTS election;
DROP TABLE IF EXISTS Political_Member;
DROP TABLE IF EXISTS Political_Party;

-- CREATE TABLES
CREATE TABLE users (
	ID INT AUTO_INCREMENT PRIMARY KEY,
	personal_number VARCHAR(50),
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	birthdate DATE,
	constituency VARCHAR(50),
	federal_state VARCHAR(50),
	password VARCHAR(150)
);

CREATE TABLE roles (
	ID INT PRIMARY KEY,
	name VARCHAR(50)
);

CREATE TABLE user_roles (
        user_id INT,
        FOREIGN KEY (user_ID)
            REFERENCES users (ID),
        role_id INT,
        FOREIGN KEY (role_ID)
            REFERENCES roles (ID)
);

CREATE TABLE election (
        ID INT AUTO_INCREMENT PRIMARY KEY,
		type VARCHAR(50),
        region VARCHAR(50),
        votes INT,
		start_date DATE,
        end_date DATE
);

CREATE TABLE Political_Party (
	ID INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE Election_Political_Party (
		Election_ID INT,
        FOREIGN KEY (Election_ID)
            REFERENCES election (ID),
        Political_Party_ID INT,
        FOREIGN KEY (Political_Party_ID)
            REFERENCES Political_Party (ID),
		Political_Member VARCHAR(250)
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
            REFERENCES election (ID),
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
            REFERENCES election (ID)
);

CREATE TABLE Election_Political_Member_Votes(
		Election_ID INT,
        FOREIGN KEY (Election_ID)
            REFERENCES election (ID),
		Political_Member_ID INT,
        FOREIGN KEY (Political_Member_ID)
            REFERENCES Political_Member (ID),
		votes INT
);

CREATE TABLE Election_Political_Party_Votes(
		Election_ID INT,
        FOREIGN KEY (Election_ID)
            REFERENCES election (ID),
		Political_Party_ID INT,
        FOREIGN KEY (Political_Party_ID)
            REFERENCES Political_Party (ID),
		votes INT
);

-- FILL DATA
INSERT INTO roles(ID, name) VALUES(1, 'ROLE_USER');
INSERT INTO roles(ID, name) VALUES(2, 'ROLE_MODERATOR');
INSERT INTO roles(ID, name) VALUES(3, 'ROLE_ADMIN');

-- Political Partys
INSERT INTO Political_Party(name) VALUES('CDU'); -- 1
INSERT INTO Political_Party(name) VALUES('SPD'); -- 2
INSERT INTO Political_Party(name) VALUES('FDP'); -- 3
INSERT INTO Political_Party(name) VALUES('DIE LINKE'); -- 4
INSERT INTO Political_Party(name) VALUES('GRÜNE'); -- 5
INSERT INTO Political_Party(name) VALUES('AfD'); -- 6
INSERT INTO Political_Party(name) VALUES('Die PARTEI'); -- 7
INSERT INTO Political_Party(name) VALUES('ÖDP'); -- 8
INSERT INTO Political_Party(name) VALUES('V-Partei'); -- 9
INSERT INTO Political_Party(name) VALUES('DieBasis'); -- 10
INSERT INTO Political_Party(name) VALUES('Tierschutzpartei'); -- 11
INSERT INTO Political_Party(name) VALUES('NPD'); -- 12
INSERT INTO Political_Party(name) VALUES('FREIE WÄHLER'); -- 13
INSERT INTO Political_Party(name) VALUES('PIRATEN'); -- 14
INSERT INTO Political_Party(name) VALUES('MLPD'); -- 15
INSERT INTO Political_Party(name) VALUES('Bündnis C'); -- 16
INSERT INTO Political_Party(name) VALUES('III. Weg'); -- 17
INSERT INTO Political_Party(name) VALUES('DKP'); -- 18
INSERT INTO Political_Party(name) VALUES('Die Humanisten'); -- 19
INSERT INTO Political_Party(name) VALUES('Gesundheitsforschung'); -- 20
INSERT INTO Political_Party(name) VALUES('Team Todenhöfer'); -- 21
INSERT INTO Political_Party(name) VALUES('Volt'); -- 22

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
INSERT INTO election(type, region, votes, start_date, end_date) VALUES('Bundestagswahl', 'Deutschland', 2, '2023.04.01', '2023.10.01');

-- election Political Party
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID, Political_Member) VALUES(1, 1, 'Tino Chrupalla, Jens Maier, Siegbert Droese, Karsten Hilse, Andreas Harlaß');
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID, Political_Member) VALUES(1, 2, 'Marco Wanderwitz, Dr. Christiane Schenderlein, Dr. Markus Recihel, Yvonne Magwas, Carsten Körber');
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID, Political_Member) VALUES(1, 3, 'Katja Kipping, Sören Pellmann, Caren Lay, Dr. Andre Hahn, Clara Anne Bünger');
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID, Political_Member) VALUES(1, 4, 'Holger Mann, Kathrin Michel, Detlef Müller, Rasha Nasr, Carlos Kasper');
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID, Political_Member) VALUES(1, 5, 'Torsten Herbst, Frank Müller-Rosentritt, Phillipp Hartewig, Ulrike Harzer, Nico Tippelt');
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID, Political_Member) VALUES(1, 6, 'Dr. Paula Piechotta, Bernhard Hermann, Merle Spellerberg, Kassem Taher Saleh, Annett Jagiela');
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID, Political_Member) VALUES(1, 7, 'Dr. Peter Zimmer, Nico Bartilla, Patrick Kühn-Breisch');
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID, Political_Member) VALUES(1, 8, 'Dr. Anke Woschech, Dr. Matthias Peter Reinecke, Dr. Michael Höfler, Dr. Ronny Peters, Dr. Morris Woschech');
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID, Political_Member) VALUES(1, 9, 'Maik Müller, Stefan Hartung, Ines Schreiber, Stefan Trautmann, Steve Weißbach');
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID, Political_Member) VALUES(1, 10, 'Thomas Weidinger, Dr. Brit Reimann-Bernhardt, Günter Hutschalik, Claudia Drechsel');
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID, Political_Member) VALUES(1, 11, 'Anne Herpertz, Steve König, Stephanie Henkel, Manuel Wolf, Thomas Köhler');
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID, Political_Member) VALUES(1, 12, 'Sebastian Högen, Uta Strenger, Markus Peter Taubert, Dirk Matthias Zimmermann, Steffen Frank Förster');
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID, Political_Member) VALUES(1, 13, 'Thomas Lörinczy, Christine Städter, Jenniffer Sophie Schilling, Hendrik Swoboda, Jana Schilling');
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID, Political_Member) VALUES(1, 14, 'Günter Slave, Louisa Baronesse von Freytag-Löringhoff, Philipp Gäbel, Lutz Hartmann, Dr. Helmut Zagermann');
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID, Political_Member) VALUES(1, 15, 'Dr. Christoph Heinritz-Bechtel, Anke Althoff, Kerry Charles Cherki, Stefan Heinke, Antje Bäz');
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID, Political_Member) VALUES(1, 16, 'Thomas Lamowski, Simon Haustein, Martin Rübner, Eva Vieweg, Samuel Weiß');
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID, Political_Member) VALUES(1, 17, 'Tony Gentsch, Petra Rammer, Rico Döhler, David Dschiettig, Udo Sieghart');
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID, Political_Member) VALUES(1, 18, 'Andreas Koch, Evelyne Elke Brucks, Herbert Münochw, Maritta Brückner, Helmut-Alexander Kalex');
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID, Political_Member) VALUES(1, 19, 'Dominic Eberle, Dominic Ressel, Jakob Schmidt, Philipp Arit, Kristina Weidner');
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID, Political_Member) VALUES(1, 20, 'Andreas Kabus, Dr. Frank Seifert');
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID, Political_Member) VALUES(1, 21, 'Fanny Francke, Jörg Frister, Tobias Beschow, Matthias Glöckner');
INSERT INTO Election_Political_Party(Election_ID, Political_Party_ID, Political_Member) VALUES(1, 22, 'Jessica Sabine Roitzsch, Florian Kiel, Dr. Anke Köhler, Thomas Wetendorf, Mathias Radu Neubauer');

-- election Political Member
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

INSERT INTO users(id, personal_number, first_name, last_name, birthdate, constituency, federal_state, password)
VALUES 	(2147483647, "L28771V9V", "ADMIN", "ADMIN", DATE '2000-05-20', "", "", "Passwort");

INSERT INTO user_roles(user_id, role_id)
VALUES (2147483647,3);
