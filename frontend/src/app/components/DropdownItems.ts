import {withRequestsMadeViaParent} from "@angular/common/http";
import {filter} from "rxjs";

interface constituency {
  disabled?: boolean;
  id: number;
  name: string;
}

export class DropdownItems {
  static federalStates: string[] = [
    'Baden Württemberg',
    'Bayern',
    'Berlin',
    'Brandenburg',
    'Bremen',
    'Hamburg',
    'Hessen',
    'Mecklenburg-Vorpommern',
    'Niedersachsen',
    'Nordrhein Westfalen',
    'Rheinland-Pfalz',
    'Saarland',
    'Sachsen',
    'Sachsen-Anhalt',
    'Schleswig-Holstein',
    'Thüringen',
  ];

  static constituencies: constituency[] = [
    {
      id: 1,
      name: 'Flensburg – Schleswig'
    },
    {
      id: 2,
      name: 'Nordfriesland – Dithmarschen Nord'
    },
    {
      id: 3,
      name: 'Steinburg – Dithmarschen Süd'
    },
    {
      id: 4,
      name: 'Rendsburg-Eckernförde'
    },
    {
      id: 5,
      name: 'Kiel'
    },
    {
      id: 6,
      name: 'Plön – Neumünster'
    },
    {
      id: 7,
      name: 'Pinneberg'
    },
    {
      id: 8,
      name: 'Segeberg – Stormarn-Mitte'
    },
    {
      id: 9,
      name: 'Ostholstein – Stormarn-Nord'
    },
    {
      id: 10,
      name: 'Herzogtum Lauenburg – Stormarn-Süd'
    },
    {
      id: 11,
      name: 'Lübeck'
    },
    {
      id: 12,
      name: 'Schwerin – Ludwigslust-Parchim I – Nordwestmecklenburg I'
    },
    {
      id: 13,
      name: 'Ludwigslust-Parchim II – Nordwestmecklenburg II – Landkreis Rostock I'
    },
    {
      id: 14,
      name: 'Rostock – Landkreis Rostock II'
    },
    {
      id: 15,
      name: 'Vorpommern-Rügen – Vorpommern-Greifswald I'
    },
    {
      id: 16,
      name: 'Mecklenburgische Seenplatte I – Vorpommern-Greifswald II'
    },
    {
      id: 17,
      name: 'Mecklenburgische Seenplatte II – Landkreis Rostock III'
    },
    {
      id: 18,
      name: 'Hamburg-Mitte'
    },
    {
      id: 19,
      name: 'Hamburg-Altona'
    },
    {
      id: 20,
      name: 'Hamburg-Eimsbüttel'
    },
    {
      id: 21,
      name: 'Hamburg-Nord'
    },
    {
      id: 22,
      name: 'Hamburg-Wandsbek'
    },
    {
      id: 23,
      name: 'Hamburg-Bergedorf – Harburg'
    },
    {
      id: 24,
      name: 'Aurich – Emden'
    },
    {
      id: 25,
      name: 'Unterems'
    },
    {
      id: 26,
      name: 'Friesland – Wilhelmshaven – Wittmund'
    },
    {
      id: 27,
      name: 'Oldenburg – Ammerland'
    },
    {
      id: 28,
      name: 'Delmenhorst – Wesermarsch – Oldenburg-Land'
    },
    {
      id: 29,
      name: 'Cuxhaven – Stade II'
    },
    {
      id: 30,
      name: 'Stade I – Rotenburg II'
    },
    {
      id: 31,
      name: 'Mittelems'
    },
    {
      id: 32,
      name: 'Cloppenburg – Vechta'
    },
    {
      id: 33,
      name: 'Diepholz – Nienburg I'
    },
    {
      id: 34,
      name: 'Osterholz – Verden'
    },
    {
      id: 35,
      name: 'Rotenburg I – Heidekreis'
    },
    {
      id: 36,
      name: 'Harburg'
    },
    {
      id: 37,
      name: 'Lüchow-Dannenberg – Lüneburg'
    },
    {
      id: 38,
      name: 'Osnabrück-Land'
    },
    {
      id: 39,
      name: 'Stadt Osnabrück'
    },
    {
      id: 40,
      name: 'Nienburg II – Schaumburg'
    },
    {
      id: 41,
      name: 'Stadt Hannover I'
    },
    {
      id: 42,
      name: 'Stadt Hannover II'
    },
    {
      id: 43,
      name: 'Hannover-Land I'
    },
    {
      id: 44,
      name: 'Celle – Uelzen'
    },
    {
      id: 45,
      name: 'Gifhorn – Peine'
    },
    {
      id: 46,
      name: 'Hameln-Pyrmont – Holzminden'
    },
    {
      id: 47,
      name: 'Hannover-Land II'
    },
    {
      id: 48,
      name: 'Hildesheim'
    },
    {
      id: 49,
      name: 'Salzgitter – Wolfenbüttel'
    },
    {
      id: 50,
      name: 'Braunschweig'
    },
    {
      id: 51,
      name: 'Helmstedt – Wolfsburg'
    },
    {
      id: 52,
      name: 'Goslar – Northeim – Osterode'
    },
    {
      id: 53,
      name: 'Göttingen'
    },
    {
      id: 54,
      name: 'Bremen I'
    },
    {
      id: 55,
      name: 'Bremen II – Bremerhaven'
    },
    {
      id: 56,
      name: 'Prignitz – Ostprignitz-Ruppin – Havelland I'
    },
    {
      id: 57,
      name: 'Uckermark – Barnim I'
    },
    {
      id: 58,
      name: 'Oberhavel – Havelland II'
    },
    {
      id: 59,
      name: 'Märkisch-Oderland – Barnim II'
    },
    {
      id: 60,
      name: 'Brandenburg a.d. Havel – Potsdam-Mittelmark I – Havelland III – Teltow-Fläming I'
    },
    {
      id: 61,
      name: 'Potsdam – Potsdam-Mittelmark II – Teltow-Fläming II'
    },
    {
      id: 62,
      name: 'Dahme-Spreewald – Teltow-Fläming III – Oberspreewald-Lausitz I'
    },
    {
      id: 63,
      name: 'Frankfurt (Oder) – Oder-Spree'
    },
    {
      id: 64,
      name: 'Cottbus – Spree-Neiße'
    },
    {
      id: 65,
      name: 'Elbe-Elster – Oberspreewald-Lausitz II'
    },
    {
      id: 66,
      name: 'Altmark'
    },
    {
      id: 67,
      name: 'Börde – Jerichower Land'
    },
    {
      id: 68,
      name: 'Harz'
    },
    {
      id: 69,
      name: 'Magdeburg'
    },
    {
      id: 70,
      name: 'Dessau – Wittenberg'
    },
    {
      id: 71,
      name: 'Anhalt'
    },
    {
      id: 72,
      name: 'Halle'
    },
    {
      id: 73,
      name: 'Burgenland – Saalekreis'
    },
    {
      id: 74,
      name: 'Mansfeld'
    },
    {
      id: 75,
      name: 'Berlin-Mitte'
    },
    {
      id: 76,
      name: 'Berlin-Pankow'
    },
    {
      id: 77,
      name: 'Berlin-Reinickendorf'
    },
    {
      id: 78,
      name: 'Berlin-Spandau – Charlottenburg-Nord'
    },
    {
      id: 79,
      name: 'Berlin-Steglitz – Zehlendorf'
    },
    {
      id: 80,
      name: 'Berlin-Charlottenburg – Wilmersdorf'
    },
    {
      id: 81,
      name: 'Berlin-Tempelhof – Schöneberg'
    },
    {
      id: 82,
      name: 'Berlin-Neukölln'
    },
    {
      id: 83,
      name: 'Berlin-Friedrichshain – Kreuzberg – Prenzlauer Berg Ost'
    },
    {
      id: 84,
      name: 'Berlin-Treptow – Köpenick'
    },
    {
      id: 85,
      name: 'Berlin-Marzahn – Hellersdorf'
    },
    {
      id: 86,
      name: 'Berlin-Lichtenberg'
    },
    {
      id: 87,
      name: 'Aachen I'
    },
    {
      id: 88,
      name: 'Aachen II'
    },
    {
      id: 89,
      name: 'Heinsberg'
    },
    {
      id: 90,
      name: 'Düren'
    },
    {
      id: 91,
      name: 'Rhein-Erft-Kreis I'
    },
    {
      id: 92,
      name: 'Euskirchen – Rhein-Erft-Kreis II'
    },
    {
      id: 93,
      name: 'Köln I'
    },
    {
      id: 94,
      name: 'Köln II'
    },
    {
      id: 95,
      name: 'Köln III'
    },
    {
      id: 96,
      name: 'Bonn'
    },
    {
      id: 97,
      name: 'Rhein-Sieg-Kreis I'
    },
    {
      id: 98,
      name: 'Rhein-Sieg-Kreis II'
    },
    {
      id: 99,
      name: 'Oberbergischer Kreis'
    },
    {
      id: 100,
      name: 'Rheinisch-Bergischer Kreis'
    },
    {
      id: 101,
      name: 'Leverkusen – Köln IV'
    },
    {
      id: 102,
      name: 'Wuppertal I'
    },
    {
      id: 103,
      name: 'Solingen – Remscheid – Wuppertal II'
    },
    {
      id: 104,
      name: 'Mettmann I'
    },
    {
      id: 105,
      name: 'Mettmann II'
    },
    {
      id: 106,
      name: 'Düsseldorf I'
    },
    {
      id: 107,
      name: 'Düsseldorf II'
    },
    {
      id: 108,
      name: 'Neuss I'
    },
    {
      id: 109,
      name: 'Mönchengladbach'
    },
    {
      id: 110,
      name: 'Krefeld I – Neuss II'
    },
    {
      id: 111,
      name: 'Viersen'
    },
    {
      id: 112,
      name: 'Kleve'
    },
    {
      id: 113,
      name: 'Wesel I'
    },
    {
      id: 114,
      name: 'Krefeld II – Wesel II'
    },
    {
      id: 115,
      name: 'Duisburg I'
    },
    {
      id: 116,
      name: 'Duisburg II'
    },
    {
      id: 117,
      name: 'Oberhausen – Wesel III'
    },
    {
      id: 118,
      name: 'Mülheim – Essen I'
    },
    {
      id: 119,
      name: 'Essen II'
    },
    {
      id: 120,
      name: 'Essen III'
    },
    {
      id: 121,
      name: 'Recklinghausen I'
    },
    {
      id: 122,
      name: 'Recklinghausen II'
    },
    {
      id: 123,
      name: 'Gelsenkirchen'
    },
    {
      id: 124,
      name: 'Steinfurt I – Borken I'
    },
    {
      id: 125,
      name: 'Bottrop – Recklinghausen III'
    },
    {
      id: 126,
      name: 'Borken II'
    },
    {
      id: 127,
      name: 'Coesfeld – Steinfurt II'
    },
    {
      id: 128,
      name: 'Steinfurt III'
    },
    {
      id: 129,
      name: 'Münster'
    },
    {
      id: 130,
      name: 'Warendorf'
    },
    {
      id: 131,
      name: 'Gütersloh I'
    },
    {
      id: 132,
      name: 'Bielefeld – Gütersloh II'
    },
    {
      id: 133,
      name: 'Herford – Minden-Lübbecke II'
    },
    {
      id: 134,
      name: 'Minden-Lübbecke I'
    },
    {
      id: 135,
      name: 'Lippe I'
    },
    {
      id: 136,
      name: 'Höxter – Gütersloh III – Lippe II'
    },
    {
      id: 137,
      name: 'Paderborn'
    },
    {
      id: 138,
      name: 'Hagen – Ennepe-Ruhr-Kreis I'
    },
    {
      id: 139,
      name: 'Ennepe-Ruhr-Kreis II'
    },
    {
      id: 140,
      name: 'Bochum I'
    },
    {
      id: 141,
      name: 'Herne – Bochum II'
    },
    {
      id: 142,
      name: 'Dortmund I'
    },
    {
      id: 143,
      name: 'Dortmund II'
    },
    {
      id: 144,
      name: 'Unna I'
    },
    {
      id: 145,
      name: 'Hamm – Unna II'
    },
    {
      id: 146,
      name: 'Soest'
    },
    {
      id: 147,
      name: 'Hochsauerlandkreis'
    },
    {
      id: 148,
      name: 'Siegen-Wittgenstein'
    },
    {
      id: 149,
      name: 'Olpe – Märkischer Kreis I'
    },
    {
      id: 150,
      name: 'Märkischer Kreis II'
    },
    {
      id: 151,
      name: 'Nordsachsen'
    },
    {
      id: 152,
      name: 'Leipzig I'
    },
    {
      id: 153,
      name: 'Leipzig II'
    },
    {
      id: 154,
      name: 'Leipzig-Land'
    },
    {
      id: 155,
      name: 'Meißen'
    }, {
      id: 156,
      name: 'Bautzen I'
    },
    {
      id: 157,
      name: 'Görlitz'
    },
    {
      id: 158,
      name: 'Sächsische Schweiz – Osterzgebirge'
    },
    {
      id: 159,
      name: 'Dresden I'
    },
    {
      id: 160,
      name: 'Dresden II – Bautzen II'
    },
    {
      id: 161,
      name: 'Mittelsachsen'
    },
    {
      id: 162,
      name: 'Chemnitz'
    },
    {
      id: 163,
      name: 'Chemnitzer Umland – Erzgebirgskreis II'
    },
    {
      id: 164,
      name: 'Erzgebirgskreis I'
    },
    {
      id: 165,
      name: 'Zwickau'
    },
    {
      id: 166,
      name: 'Vogtlandkreis'
    },
    {
      id: 167,
      name: 'Waldeck'
    },
    {
      id: 168,
      name: 'Kassel'
    },
    {
      id: 169,
      name: 'Werra-Meißner – Hersfeld-Rotenburg'
    },
    {
      id: 170,
      name: 'Schwalm-Eder'
    },
    {
      id: 171,
      name: 'Marburg'
    },
    {
      id: 172,
      name: 'Lahn-Dill'
    },
    {
      id: 173,
      name: 'Gießen'
    },
    {
      id: 174,
      name: 'Fulda'
    },
    {
      id: 175,
      name: 'Main-Kinzig – Wetterau II – Schotten'
    },
    {
      id: 176,
      name: 'Hochtaunus'
    },
    {
      id: 177,
      name: 'Wetterau I'
    },
    {
      id: 178,
      name: 'Rheingau-Taunus – Limburg'
    },
    {
      id: 179,
      name: 'Wiesbaden'
    },
    {
      id: 180,
      name: 'Hanau'
    },
    {
      id: 181,
      name: 'Main-Taunus'
    },
    {
      id: 182,
      name: 'Frankfurt am Main I'
    },
    {
      id: 183,
      name: 'Frankfurt am Main II'
    },
    {
      id: 184,
      name: 'Groß-Gerau'
    },
    {
      id: 185,
      name: 'Offenbach'
    },
    {
      id: 186,
      name: 'Darmstadt'
    },
    {
      id: 187,
      name: 'Odenwald'
    },
    {
      id: 188,
      name: 'Bergstraße'
    },
    {
      id: 189,
      name: 'Eichsfeld – Nordhausen – Kyffhäuserkreis'
    },
    {
      id: 190,
      name: 'Eisenach – Wartburgkreis – Unstrut-Hainich-Kreis'
    },
    {
      id: 191,
      name: 'Jena – Sömmerda – Weimarer Land I'
    },
    {
      id: 192,
      name: 'Gotha – Ilm-Kreis'
    },
    {
      id: 193,
      name: 'Erfurt – Weimar – Weimarer Land II'
    },
    {
      id: 194,
      name: 'Gera – Greiz – Altenburger Land'
    },
    {
      id: 195,
      name: 'Saalfeld-Rudolstadt – Saale-Holzland-Kreis – Saale-Orla-Kreis'
    },
    {
      id: 196,
      name: 'Suhl – Schmalkalden-Meiningen – Hildburghausen – Sonneberg'
    },
    {
      id: 197,
      name: 'Neuwied'
    },
    {
      id: 198,
      name: 'Ahrweiler'
    },
    {
      id: 199,
      name: 'Koblenz'
    },
    {
      id: 200,
      name: 'Mosel/Rhein-Hunsrück'
    },
    {
      id: 201,
      name: 'Kreuznach'
    },
    {
      id: 202,
      name: 'Bitburg'
    },
    {
      id: 203,
      name: 'Trier'
    },
    {
      id: 204,
      name: 'Montabaur'
    },
    {
      id: 205,
      name: 'Mainz'
    },
    {
      id: 206,
      name: 'Worms'
    },
    {
      id: 207,
      name: 'Ludwigshafen/Frankenthal'
    },
    {
      id: 208,
      name: 'Neustadt – Speyer'
    },
    {
      id: 209,
      name: 'Kaiserslautern'
    },
    {
      id: 210,
      name: 'Pirmasens'
    },
    {
      id: 211,
      name: 'Südpfalz'
    },
    {
      id: 212,
      name: 'Altötting'
    },
    {
      id: 213,
      name: 'Erding – Ebersberg'
    },
    {
      id: 214,
      name: 'Freising'
    },
    {
      id: 215,
      name: 'Fürstenfeldbruck'
    },
    {
      id: 216,
      name: 'Ingolstadt'
    },
    {
      id: 217,
      name: 'München-Nord'
    },
    {
      id: 218,
      name: 'München-Ost'
    },
    {
      id: 219,
      name: 'München-Süd'
    },
    {
      id: 220,
      name: 'München-West/Mitte'
    },
    {
      id: 221,
      name: 'München-Land'
    },
    {
      id: 222,
      name: 'Rosenheim'
    },
    {
      id: 223,
      name: 'Bad Tölz-Wolfratshausen – Miesbach'
    },
    {
      id: 224,
      name: 'Starnberg – Landsberg am Lech'
    },
    {
      id: 225,
      name: 'Traunstein'
    },
    {
      id: 226,
      name: 'Weilheim'
    },
    {
      id: 227,
      name: 'Deggendorf'
    },
    {
      id: 228,
      name: 'Landshut'
    },
    {
      id: 229,
      name: 'Passau'
    },
    {
      id: 230,
      name: 'Rottal-Inn'
    },
    {
      id: 231,
      name: 'Straubing'
    },
    {
      id: 232,
      name: 'Amberg'
    },
    {
      id: 233,
      name: 'Regensburg'
    },
    {
      id: 234,
      name: 'Schwandorf'
    },
    {
      id: 235,
      name: 'Weiden'
    },
    {
      id: 236,
      name: 'Bamberg'
    },
    {
      id: 237,
      name: 'Bayreuth'
    },
    {
      id: 238,
      name: 'Coburg'
    },
    {
      id: 239,
      name: 'Hof'
    },
    {
      id: 240,
      name: 'Kulmbach'
    },
    {
      id: 241,
      name: 'Ansbach'
    },
    {
      id: 242,
      name: 'Erlangen'
    },
    {
      id: 243,
      name: 'Fürth'
    },
    {
      id: 244,
      name: 'Nürnberg-Nord'
    },
    {
      id: 245,
      name: 'Nürnberg-Süd'
    },
    {
      id: 246,
      name: 'Roth'
    },
    {
      id: 247,
      name: 'Aschaffenburg'
    },
    {
      id: 248,
      name: 'Bad Kissingen'
    },
    {
      id: 249,
      name: 'Main-Spessart'
    },
    {
      id: 250,
      name: 'Schweinfurt'
    },
    {
      id: 251,
      name: 'Würzburg'
    },
    {
      id: 252,
      name: 'Augsburg-Stadt'
    },
    {
      id: 253,
      name: 'Augsburg-Land'
    },
    {
      id: 254,
      name: 'Donau-Ries'
    },
    {
      id: 255,
      name: 'Neu-Ulm'
    },
    {
      id: 256,
      name: 'Oberallgäu'
    },
    {
      id: 257,
      name: 'Ostallgäu'
    },
    {
      id: 258,
      name: 'Stuttgart I'
    },
    {
      id: 259,
      name: 'Stuttgart II'
    },
    {
      id: 260,
      name: 'Böblingen'
    },
    {
      id: 261,
      name: 'Esslingen'
    },
    {
      id: 262,
      name: 'Nürtingen'
    },
    {
      id: 263,
      name: 'Göppingen'
    },
    {
      id: 264,
      name: 'Waiblingen'
    },
    {
      id: 265,
      name: 'Ludwigsburg'
    },
    {
      id: 266,
      name: 'Neckar-Zaber'
    },
    {
      id: 267,
      name: 'Heilbronn'
    },
    {
      id: 268,
      name: 'Schwäbisch Hall – Hohenlohe'
    },
    {
      id: 269,
      name: 'Backnang – Schwäbisch Gmünd'
    },
    {
      id: 270,
      name: 'Aalen – Heidenheim'
    },
    {
      id: 271,
      name: 'Karlsruhe-Stadt'
    },
    {
      id: 272,
      name: 'Karlsruhe-Land'
    },
    {
      id: 273,
      name: 'Rastatt'
    },
    {
      id: 274,
      name: 'Heidelberg'
    },
    {
      id: 275,
      name: 'Mannheim'
    },
    {
      id: 276,
      name: 'Odenwald – Tauber'
    },
    {
      id: 277,
      name: 'Rhein-Neckar'
    },
    {
      id: 278,
      name: 'Bruchsal – Schwetzingen'
    },
    {
      id: 279,
      name: 'Pforzheim'
    },
    {
      id: 280,
      name: 'Calw'
    },
    {
      id: 281,
      name: 'Freiburg'
    },
    {
      id: 282,
      name: 'Lörrach – Müllheim'
    },
    {
      id: 283,
      name: 'Emmendingen – Lahr'
    },
    {
      id: 284,
      name: 'Offenburg'
    },
    {
      id: 285,
      name: 'Rottweil – Tuttlingen'
    },
    {
      id: 286,
      name: 'Schwarzwald-Baar'
    },
    {
      id: 287,
      name: 'Konstanz'
    },
    {
      id: 288,
      name: 'Waldshut'
    },
    {
      id: 289,
      name: 'Reutlingen'
    },
    {
      id: 290,
      name: 'Tübingen'
    },
    {
      id: 291,
      name: 'Ulm'
    },
    {
      id: 292,
      name: 'Biberach'
    },
    {
      id: 293,
      name: 'Bodensee'
    },
    {
      id: 294,
      name: 'Ravensburg'
    },
    {
      id: 295,
      name: 'Zollernalb – Sigmaringen'
    },
    {
      id: 296,
      name: 'Saarbrücken'
    },
    {
      id: 297,
      name: 'Saarlouis'
    },
    {
      id: 298,
      name: 'St. Wendel'
    },
    {
      id: 299,
      name: 'Homburg'
    }
  ];

  static checkConstituencies(federalState: string): constituency[] {
    let filteredConstituencies = this.constituencies;
    let newConstituencies: constituency[];
    filteredConstituencies.forEach((constituency, index) => {
      switch (federalState) {
        case 'Baden Württemberg': {
          newConstituencies = filteredConstituencies.filter(constituency => (constituency.id >= 258 && constituency.id <= 295))
          break;
        }
        case 'Bayern': {
          newConstituencies = filteredConstituencies.filter(constituency => (constituency.id >= 212 && constituency.id <= 257))
          break;
        }
        case 'Berlin': {
          newConstituencies = filteredConstituencies.filter(constituency => (constituency.id >= 75 && constituency.id <= 86))
          break;
        }
        case 'Brandenburg': {
          newConstituencies = filteredConstituencies.filter(constituency => (constituency.id >= 56 && constituency.id <= 65))
          break;
        }
        case 'Bremen': {
          newConstituencies = filteredConstituencies.filter(constituency => (constituency.id >= 54 && constituency.id <= 55))
          break;
        }
        case 'Hamburg': {
          newConstituencies = filteredConstituencies.filter(constituency => (constituency.id >= 18 && constituency.id <= 23))
          break;
        }
        case 'Hessen': {
          newConstituencies = filteredConstituencies.filter(constituency => (constituency.id >= 167 && constituency.id <= 188))
          break;
        }
        case 'Mecklenburg-Vorpommern': {
          newConstituencies = filteredConstituencies.filter(constituency => (constituency.id >= 12 && constituency.id <= 17))
          break;
        }
        case 'Niedersachsen': {
          newConstituencies = filteredConstituencies.filter(constituency => (constituency.id >= 24 && constituency.id <= 53))
          break;
        }
        case 'Nordrhein Westfalen': {
          newConstituencies = filteredConstituencies.filter(constituency => (constituency.id >= 87 && constituency.id <= 150))
          break;
        }
        case 'Rheinland-Pfalz': {
          newConstituencies = filteredConstituencies.filter(constituency => (constituency.id >= 197 && constituency.id <= 211))
          break;
        }
        case 'Saarland': {
          newConstituencies = filteredConstituencies.filter(constituency => (constituency.id >= 296 && constituency.id <= 299))
          break;
        }
        case 'Sachsen': {
          newConstituencies = filteredConstituencies.filter(constituency => (constituency.id >= 151 && constituency.id <= 166))
          break;
        }
        case 'Sachsen-Anhalt': {
          newConstituencies = filteredConstituencies.filter(constituency => (constituency.id >= 66 && constituency.id <= 74))
          break;
        }
        case 'Schleswig-Holstein': {
          newConstituencies = filteredConstituencies.filter(constituency => (constituency.id >= 1 && constituency.id <= 11))
          break;
        }
        case 'Thüringen': {
          newConstituencies = filteredConstituencies.filter(constituency => (constituency.id >= 189 && constituency.id <= 196))
          break;
        }
      }
    })
    // @ts-ignore
    console.log(newConstituencies);
    // @ts-ignore
    return newConstituencies;
  }
}
