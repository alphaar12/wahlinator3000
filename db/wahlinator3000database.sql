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
-- Bundestag
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
-- Landtag BW
INSERT INTO political_party(name, abbrevation) VALUES('Klimaliste Baden-Würtenberg', 'KlimalisteBW'); -- 23
INSERT INTO political_party(name, abbrevation) VALUES('Partei WIR2020', 'W2020'); -- 24
-- Landtag Saarland
INSERT INTO political_party(name, abbrevation) VALUES('Familien-Partei Deutschlands', 'FAMILIE'); -- 25
INSERT INTO political_party(name, abbrevation) VALUES('bunt.saar - sozial-ökologische liste', 'bunt.saar'); -- 26

-- Political Members
-- Bundestag
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
-- Landtag BW
INSERT INTO political_member(first_name, Last_Name, Description, political_Party_ID) VALUES('Aras', 'Muhterem', 'Landtagspräsidentin, Dipl. -Ökologin, Stuttgart', 5); -- 14
INSERT INTO political_member(first_name, Last_Name, Description, political_Party_ID) VALUES('Ruth', 'Schagemann', 'Architektin, Stuttgart', 1); -- 15
INSERT INTO political_member(first_name, Last_Name, Description, political_Party_ID) VALUES('Steffen', 'Degler', 'Taxifahrer, Backnang', 6); -- 16
INSERT INTO political_member(first_name, Last_Name, Description, political_Party_ID) VALUES('Sascha', 'Dr. Meßmer', 'Wirtschaftsförderer, Stuttgart', 2); -- 17
INSERT INTO political_member(first_name, Last_Name, Description, political_Party_ID) VALUES('Johanna', 'Molitor', 'Parlamentsrätin, Stuttgart', 3); -- 18
INSERT INTO political_member(first_name, Last_Name, Description, political_Party_ID) VALUES('Filippo', 'Capezzone', 'Agrarwissenschaftler, Stuttgart', 4); -- 19
INSERT INTO political_member(first_name, Last_Name, Description, political_Party_ID) VALUES('Iris', 'Baur', 'Altenplfegehelferin, Stuttgart', 8); -- 20
INSERT INTO political_member(first_name, Last_Name, Description, political_Party_ID) VALUES('Oliver', 'Burkardsmaier', 'Programmierer, Stuttgart', 14); -- 21
INSERT INTO political_member(first_name, Last_Name, Description, political_Party_ID) VALUES('Ina', 'Schumann', 'Lehrerin, Stuttgart', 7); -- 22
INSERT INTO political_member(first_name, Last_Name, Description, political_Party_ID) VALUES('Markus', 'Mangold', 'Geograph, Leinfelden-Echterdingen', 13); -- 23
INSERT INTO political_member(first_name, Last_Name, Description, political_Party_ID) VALUES('Jonathan', 'Heckert', 'Freiwilliges ökologisches Jahr, Stuttgart', 23); -- 24
INSERT INTO political_member(first_name, Last_Name, Description, political_Party_ID) VALUES('Christoph', 'Dr. Hueck', 'Biologe, Dozent, Tübingen', 24); -- 25
INSERT INTO political_member(first_name, Last_Name, Description, political_Party_ID) VALUES('Morits', 'Klug', 'Student, Stuttgart', 22); -- 26
INSERT INTO political_member(first_name, Last_Name, Description, political_Party_ID) VALUES('Vasim', 'Barkavi', 'Werkstoffingeneur, B. Sc., Stuttgart', Null); -- 27
-- INSERT INTO political_memblr(finst_name, Last_Name, Description, political_party_ID) VALUES('', '', '', l; --n

-- Elections
-- Bundestagswahl
INSERT INTO election(type, region, votes, start_date, end_date) VALUES('Bundestagswahl', 'Deutschland', 2, '2023.04.01', '2023.10.01');
-- Landtag BW
INSERT INTO Election(type, region, votes, atart_date, end_date) VALUES('Landtag BW', 'Stuttgart', 1, '2023.04.01', '2023.10.01');
-- Landtag Saarland
INSERT INTO Election(type, region, votes, atart_date, end_date) VALUES('Landtag Saarland', 'Saabrücken', 1, '2023.04.01', '2023.10.01');

-- election Political Party
-- Bundestag
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
-- Landtag Saarland
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(3, 1, 'a)Kreiswahlvorschlag 1.Peter Strobel 2.Anja Wagner-Scheid 3.Bernd Wegner 4.Sascha Zehner 5.Petra Fretter b)Landeswahlvorschlag 1.Tobias Hans 2.Jutta Schmitt-Lang 3.Marc Daniel Speicher 4.Ute Mücklich-Heinrich 5.Dr. Chrisopher Salm');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(3, 2, 'a)Kreiswahlvorschlag 1.Ulrich Commercon 2.Stephanie Meiser 3.Pascal Arweiler 4.Kira Braun 5.Sascha Haas b)Landeswahlvorschlag 1.Anke Rehlinger 2.Reinhold Jost 3. Christine Streichert-Clivot 4.Timo Ahr 5.Kira Braun');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(3, 4, 'a)Kreiswahlvorschlag 1.Brigit Huonker 2.Mark Baumeister 3.Jasmin Pies 4.Horst Saar 5.Dunja Reichert b)Landeswahlvorschlag 1.Barbara Spaniol 2.Andrea Neumann 3.Dagmar Ensch-Engel 4. Mark Scheibel 5.Udo Reden-Buschbacher');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(3, 6, 'a)Kreiswahlvorschlag 1.Josef Dörr 2.Dieter Müller 3.Boris Huebner 4.Hermann Göttel 5.Heidemarie Schon');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(3, 5, 'a)Kreiswahlvorschlag 1.Anne Lahoda 2.Patrick Sebastian Ginsbach 3.Marlena Ruth 4.Justin Jaw Hayo 5.Barbara Klein-Braun b)Landeswahlvorschlag 1.Lisa Becker 2.Sören Bund-Becker 3.Patrick Schumann 4.Volker Morbe 5.Lara Bütermann');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(3, 3, 'a)Kreiswahlvorschlag 1.Roland König 2.Alexander Heinz 3.Heike Müller 4.Holger Fuchs 5.Danny Marlon Meyer b)Landeswahlvorschlag 1.Angelika Hießerich-Peter 2.Marcel Mucker 3.Dr. Helmut Isringhaus 4.Martina Kirsch 5.Julien Francois Simons');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(3, 25, 'a)Kreiswahlvorschlag 1.Amon Gadell 2.Stefan Rohe 3.Barbara Reiß b)Landeswahlvorschlag 1.Albrecht Hauck 2.Helmut Antis 3.Susanne Baumann 4.Roland Körner 5.Lothar Reiß');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(3, 13, 'a)Kreiswahlvorschlag 1.Nadine Puhl 2.Gernot Abrahams 3.Martina Scheller 4.Uwe Schneider 5.Bernd Schlachter b)Landeswahlvorschlag 1.Uwe Andreas Kammer 2.Prof. Dr. Vanessa Mertins 3.Clemens Werle 4.Verena Lehnert 5.Ralf Baureis');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(3, 10, 'a)Kreiswahlvorschlag 1.Jörg Bur 2.Dominik Rester 3.Helge Reichert 4.Mauro Mancini 5.Susanne Bur b)Landeswahlvorschlag 1.Hans-Theo Both 2.Mauro Marcini 3.Helge Reichert 4.Ute Weisang 5.Peter Minke');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(3, 26, 'a)Kreiswahlvorschlag 1.Undine Löhfelm 2.Camilo Berstecher 3.Sadija Kavgic 4.Ekkehart Schmidt 5.Anna Haßdenteufel b)Landeswahlvorschlag 1.Dr. Werner Ried 2. Heike Hanson 3.Ekkehart Schmidt 4.Anna Haßdenteufel 5.Winfried Hoffmann');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(3, 19, 'a)Kreiswahlvorschlag 1.Fabian Grünewald b)Landeswahlvorschlag 1.Leonie Neu 2.Fabian Grünewald 3.Lukas Seiler');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(3, 7, 'a)Kreiswahlvorschlag 1.Michael Franke 2.Almut Deeß 3.Sven Sonnhalter 4.Nicole Bornbacher 5.Christian Remark b)Landeswahlvorschlag 1.Michael Franke 2.Almut Deeß 3.Jimmy Both 4.Nicole Brornbacher 5.Sven Sonnhalter');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(3, 11, 'a)Kreiswahlvorschlag 1.Klaus Stockum 2.Sandra Lauer-Zimmermann 3.Doris Bauer 4.Margarete Blasen b)Landeswahlvorschlag 1.Thomas Weber 2.Andreas Schäfer 3.Pia Bauer 4.Monika Bugs 5.Katrin Schuhn');
INSERT INTO election_political_party(Election_ID, political_party_ID, political_members) VALUES(3, 22, 'a)Kreiswahlvorschlag 1.Sarah Hamm 2.Erik Hoffmann b) Landeswahlvorschlag 1.Sarah Hamm 2.Martin Duda 3.Layla Emmerich 4.Marc Frantz 5.Alexander Fadel');

-- election Political Member
-- Bundestag
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
-- Landtag BW
INSERT INTO election_political_member(Election_ID, political_member_ID) VALUES(2, 14);
INSERT INTO election_political_member(Election_ID, political_member_ID) VALUES(2, 15);
INSERT INTO election_political_member(Election_ID, political_member_ID) VALUES(2, 16);
INSERT INTO election_political_member(Election_ID, political_member_ID) VALUES(2, 17);
INSERT INTO election_political_member(Election_ID, political_member_ID) VALUES(2, 18);
INSERT INTO election_political_member(Election_ID, political_member_ID) VALUES(2, 19);
INSERT INTO election_political_member(Election_ID, political_member_ID) VALUES(2, 20);
INSERT INTO election_political_member(Election_ID, political_member_ID) VALUES(2, 21);
INSERT INTO election_political_member(Election_ID, political_member_ID) VALUES(2, 22);
INSERT INTO election_political_member(Election_ID, political_member_ID) VALUES(2, 23);
INSERT INTO election_political_member(Election_ID, political_member_ID) VALUES(2, 24);
INSERT INTO election_political_member(Election_ID, political_member_ID) VALUES(2, 25);
INSERT INTO election_political_member(Election_ID, political_member_ID) VALUES(2, 26);
INSERT INTO election_political_member(Election_ID, political_member_ID) VALUES(2, 27);


INSERT INTO users(id, personal_number, first_name, last_name, birthdate, constituency, federal_state, password)
VALUES 	(2147483647, "123456789", "ADMIN", "ADMIN", DATE '2000-01-01', "", "", "21232f297a57a5a743894a0e4a801fc3");

INSERT INTO user_roles(user_id, role_id)
VALUES (2147483647,3);
