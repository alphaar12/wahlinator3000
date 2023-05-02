START TRANSACTION;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS user_roles;
DROP TABLE IF EXISTS election;
DROP TABLE IF EXISTS political_party;
DROP TABLE IF EXISTS election_political_party;
DROP TABLE IF EXISTS election_political_member;
DROP TABLE IF EXISTS Election_political_member_Votes;
DROP TABLE IF EXISTS Election_political_party_Votes;
DROP TABLE IF EXISTS political_member;
DROP TABLE IF EXISTS Has_Voted_Election;

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

CREATE TABLE political_party (
	ID INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(250),
    abbrevation VARCHAR(50)
);

CREATE TABLE election_political_party (
		Election_ID INT,
        FOREIGN KEY (Election_ID)
            REFERENCES election (ID),
        political_party_ID INT,
        FOREIGN KEY (political_party_ID)
            REFERENCES political_party (ID),
		political_members VARCHAR(250)
);

CREATE TABLE political_member (
		ID INT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        Description VARCHAR(50),
        political_party_ID INT NULL,
        FOREIGN KEY (political_party_ID)
            REFERENCES political_party (ID)
);

CREATE TABLE election_political_member (
		Election_ID INT,
        FOREIGN KEY (Election_ID)
            REFERENCES election (ID),
        political_member_ID INT,
        FOREIGN KEY (political_member_ID)
            REFERENCES political_member (ID)
);

CREATE TABLE Has_Voted_Election (
		Users_ID INT,
        FOREIGN KEY (Users_ID)
            REFERENCES users (ID),
		Election_ID INT,
        FOREIGN KEY (Election_ID)
            REFERENCES election (ID)
);

CREATE TABLE Election_political_member_Votes(
		Election_ID INT,
        FOREIGN KEY (Election_ID)
            REFERENCES election (ID),
		political_member_ID INT,
        FOREIGN KEY (political_member_ID)
            REFERENCES political_member (ID),
		votes INT
);

CREATE TABLE Election_political_party_Votes(
		Election_ID INT,
        FOREIGN KEY (Election_ID)
            REFERENCES election (ID),
		political_party_ID INT,
        FOREIGN KEY (political_party_ID)
            REFERENCES political_party (ID),
		votes INT
);

-- FILL DATA
INSERT INTO roles(ID, name) VALUES(1, 'ROLE_USER');
INSERT INTO roles(ID, name) VALUES(2, 'ROLE_MODERATOR');
INSERT INTO roles(ID, name) VALUES(3, 'ROLE_ADMIN');

-- Political Parties
INSERT INTO political_party(name, abbrevation) VALUES('Christlich Demokratische Union Deutschlands', 'CDU'); -- 1
INSERT INTO political_party(name, abbrevation) VALUES('Sozialdemokratische Partei Deutschlands', 'SPD'); -- 2
INSERT INTO political_party(name, abbrevation) VALUES('Freie Demokratische Partei', 'FDP'); -- 3
INSERT INTO political_party(name, abbrevation) VALUES('DIE LINKE', 'DIE LINKE'); -- 4
INSERT INTO political_party(name, abbrevation) VALUES('Bündnis 90/Die Grünen', 'GRÜNE'); -- 5
INSERT INTO political_party(name, abbrevation) VALUES('Alternative für Deutschland', 'AfD'); -- 6
INSERT INTO political_party(name, abbrevation) VALUES('Die PARTEI', 'Die PARTEI'); -- 7
INSERT INTO political_party(name, abbrevation) VALUES('Ökologisch-Demokratische Partei', 'ÖDP'); -- 8
INSERT INTO political_party(name, abbrevation) VALUES('Partei für Veränderung, Vegetarier und Veganer', 'V-Partei'); -- 9
INSERT INTO political_party(name, abbrevation) VALUES('Basisdemokratische Partei Deutschland', 'DieBasis'); -- 10
INSERT INTO political_party(name, abbrevation) VALUES('Partei Mensch Umwelt Tierschutz', 'Tierschutzpartei'); -- 11
INSERT INTO political_party(name, abbrevation) VALUES('Nationaldemokratische Partei Deutschlands', 'NPD'); -- 12
INSERT INTO political_party(name, abbrevation) VALUES('Freie Wähler', 'FREIE WÄHLER'); -- 13
INSERT INTO political_party(name, abbrevation) VALUES('Piratenpartei Deutschland', 'PIRATEN'); -- 14
INSERT INTO political_party(name, abbrevation) VALUES('Marxistisch-Leninistische Partei Deutschlands', 'MLPD'); -- 15
INSERT INTO political_party(name, abbrevation) VALUES('Bündnis C – Christen für Deutschland', 'Bündnis C'); -- 16
INSERT INTO political_party(name, abbrevation) VALUES('III. Weg', 'III. Weg'); -- 17
INSERT INTO political_party(name, abbrevation) VALUES('Deutsche Kommunistische Partei', 'DKP'); -- 18
INSERT INTO political_party(name, abbrevation) VALUES('Partei der Humanisten', 'Die Humanisten'); -- 19
INSERT INTO political_party(name, abbrevation) VALUES('Partei für schulmedizinische Verjüngungsforschung', 'Gesundheitsforschung'); -- 20
INSERT INTO political_party(name, abbrevation) VALUES('Team Todenhöfer – Die Gerechtigkeitspartei', 'Team Todenhöfer'); -- 21
INSERT INTO political_party(name, abbrevation) VALUES('Volt Europa', 'Volt'); -- 22

-- Political Members
INSERT INTO political_member(first_name, Last_Name, Description, political_party_ID) VALUES('Michael', 'Klonovsky', 'Autor', 6); -- 1
INSERT INTO political_member(first_name, Last_Name, Description, political_party_ID) VALUES('Frank', 'Heinrich', 'Bundestagsabgeordneter', 1); -- 2
INSERT INTO political_member(first_name, Last_Name, Description, political_party_ID) VALUES('Tim', 'Detzner', 'Angestellter', 4); -- 3
INSERT INTO political_member(first_name, Last_Name, Description, political_party_ID) VALUES('Detlef', 'Müller', 'Lokomotivführer', 2); -- 4
INSERT INTO political_member(first_name, Last_Name, Description, political_party_ID) VALUES('Frank', 'Müller-Rosentritt', 'Bundestagsabgeordneter', 3); -- 5
INSERT INTO political_member(first_name, Last_Name, Description, political_party_ID) VALUES('Karola', 'Köpferl', 'Sozialpädagogin', 5); -- 6
INSERT INTO political_member(first_name, Last_Name, Description, political_party_ID) VALUES('Paul Thomas', 'Vogel', 'Diplom-Ingenuer', 7); -- 7
INSERT INTO political_member(first_name, Last_Name, Description, political_party_ID) VALUES('Bert', 'Rohne', 'Staatlich anerkannter Sozialpädagoge', 8); -- 8
INSERT INTO political_member(first_name, Last_Name, Description, political_party_ID) VALUES('Thomas', 'Lörinczy', 'Kaufmann', 9); -- 9
INSERT INTO political_member(first_name, Last_Name, Description, political_party_ID) VALUES('Norman', 'Lienow', 'DV-Kaufmann', 10); -- 10
INSERT INTO political_member(first_name, Last_Name, Description, political_party_ID) VALUES('Daniel', 'Richter', 'Diplom-Informatiker', Null); -- 11
INSERT INTO political_member(first_name, Last_Name, Description, political_party_ID) VALUES('Jörg Alexander', 'Weidemann', 'Krankenpfleger', Null); -- 12
INSERT INTO political_member(first_name, Last_Name, Description, political_party_ID) VALUES('Hans Sieghard', 'Röhder', 'Controller IHK', Null); -- 13
-- INSERT INTO political_memblr(finst_name, Last_Name, Description, political_party_ID) VALUES('', '', '', l; --n

-- Elections
-- Bundestagswahl
INSERT INTO election(type, region, votes, start_date, end_date) VALUES('Bundestagswahl', 'Deutschland', 2, '2023.04.01', '2023.10.01');

-- election Political Party
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(1, 1, 'Tino Chrupalla, Jens Maier, Siegbert Droese, Karsten Hilse, Andreas Harlaß');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(1, 2, 'Marco Wanderwitz, Dr. Christiane Schenderlein, Dr. Markus Recihel, Yvonne Magwas, Carsten Körber');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(1, 3, 'Katja Kipping, Sören Pellmann, Caren Lay, Dr. Andre Hahn, Clara Anne Bünger');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(1, 4, 'Holger Mann, Kathrin Michel, Detlef Müller, Rasha Nasr, Carlos Kasper');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(1, 5, 'Torsten Herbst, Frank Müller-Rosentritt, Phillipp Hartewig, Ulrike Harzer, Nico Tippelt');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(1, 6, 'Dr. Paula Piechotta, Bernhard Hermann, Merle Spellerberg, Kassem Taher Saleh, Annett Jagiela');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(1, 7, 'Dr. Peter Zimmer, Nico Bartilla, Patrick Kühn-Breisch');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(1, 8, 'Dr. Anke Woschech, Dr. Matthias Peter Reinecke, Dr. Michael Höfler, Dr. Ronny Peters, Dr. Morris Woschech');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(1, 9, 'Maik Müller, Stefan Hartung, Ines Schreiber, Stefan Trautmann, Steve Weißbach');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(1, 10, 'Thomas Weidinger, Dr. Brit Reimann-Bernhardt, Günter Hutschalik, Claudia Drechsel');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(1, 11, 'Anne Herpertz, Steve König, Stephanie Henkel, Manuel Wolf, Thomas Köhler');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(1, 12, 'Sebastian Högen, Uta Strenger, Markus Peter Taubert, Dirk Matthias Zimmermann, Steffen Frank Förster');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(1, 13, 'Thomas Lörinczy, Christine Städter, Jenniffer Sophie Schilling, Hendrik Swoboda, Jana Schilling');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(1, 14, 'Günter Slave, Louisa Baronesse von Freytag-Löringhoff, Philipp Gäbel, Lutz Hartmann, Dr. Helmut Zagermann');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(1, 15, 'Dr. Christoph Heinritz-Bechtel, Anke Althoff, Kerry Charles Cherki, Stefan Heinke, Antje Bäz');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(1, 16, 'Thomas Lamowski, Simon Haustein, Martin Rübner, Eva Vieweg, Samuel Weiß');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(1, 17, 'Tony Gentsch, Petra Rammer, Rico Döhler, David Dschiettig, Udo Sieghart');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(1, 18, 'Andreas Koch, Evelyne Elke Brucks, Herbert Münochw, Maritta Brückner, Helmut-Alexander Kalex');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(1, 19, 'Dominic Eberle, Dominic Ressel, Jakob Schmidt, Philipp Arit, Kristina Weidner');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(1, 20, 'Andreas Kabus, Dr. Frank Seifert');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(1, 21, 'Fanny Francke, Jörg Frister, Tobias Beschow, Matthias Glöckner');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(1, 22, 'Jessica Sabine Roitzsch, Florian Kiel, Dr. Anke Köhler, Thomas Wetendorf, Mathias Radu Neubauer');

-- election Political Member
INSERT INTO election_political_member(Election_ID, political_member_ID) VALUES(1, 1);
INSERT INTO election_political_member(Election_ID, political_member_ID) VALUES(1, 2);
INSERT INTO election_political_member(Election_ID, political_member_ID) VALUES(1, 3);
INSERT INTO election_political_member(Election_ID, political_member_ID) VALUES(1, 4);
INSERT INTO election_political_member(Election_ID, political_member_ID) VALUES(1, 5);
INSERT INTO election_political_member(Election_ID, political_member_ID) VALUES(1, 6);
INSERT INTO election_political_member(Election_ID, political_member_ID) VALUES(1, 7);
INSERT INTO election_political_member(Election_ID, political_member_ID) VALUES(1, 8);
INSERT INTO election_political_member(Election_ID, political_member_ID) VALUES(1, 9);
INSERT INTO election_political_member(Election_ID, political_member_ID) VALUES(1, 10);
INSERT INTO election_political_member(Election_ID, political_member_ID) VALUES(1, 11);
INSERT INTO election_political_member(Election_ID, political_member_ID) VALUES(1, 12);
INSERT INTO election_political_member(Election_ID, political_member_ID) VALUES(1, 13);

INSERT INTO users(id, personal_number, first_name, last_name, birthdate, constituency, federal_state, password)
VALUES 	(2147483647, "123456789", "ADMIN", "ADMIN", DATE '2000-01-01', "", "", "21232f297a57a5a743894a0e4a801fc3");

INSERT INTO user_roles(user_id, role_id)
VALUES (2147483647,3);
