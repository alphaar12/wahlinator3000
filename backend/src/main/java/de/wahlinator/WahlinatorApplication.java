package de.wahlinator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WahlinatorApplication {

	public static void main(String[] args) {
		SpringApplication.run(WahlinatorApplication.class, args);
	}

}

//	user attribute im backend und die spalten in der tabelle (datenbank) müssen identische namen haben
//
//	im backend in der user klasse noch ein attribut isAdmin, bzw. rolle hinzufügen
//
//	sql script pushen, damit backend vervollständigt werden kann (zb. datenbanknamen, tabellennamen, etc)
//
//	backend api secure machen
//	https://howtodoinjava.com/spring-boot2/security-rest-basic-auth-example/
//
//	https://spring.io/guides/tutorials/spring-security-and-angular-js/
//
//	im frontend auch ein login screen
//
//	im frontend session verwaltung rechechieren