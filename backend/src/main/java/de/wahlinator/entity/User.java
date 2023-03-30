package de.wahlinator.entity;

import jakarta.persistence.*;
import org.springframework.data.annotation.Id;

import java.io.Serializable;
import java.sql.Date;
import java.util.Objects;

@Entity
@Table(name = "users")
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private int personalNumber;
    private String firstName;
    private String lastName;
    private Date birthdate;
    private String password;
    private int zipCode;

    public User(int id, int personalNumber, String firstName, String lastName, Date birthdate, String password, int zipCode) {
        this.id = id;
        this.personalNumber = personalNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdate = birthdate;
        this.password = password;
        this.zipCode = zipCode;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPersonalNumber() {
        return personalNumber;
    }

    public void setPersonalNumber(int personalNumber) {
        this.personalNumber = personalNumber;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Date getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getZipCode() {
        return zipCode;
    }

    public void setZipCode(int zipCode) {
        this.zipCode = zipCode;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User)) return false;
        User user = (User) o;
        return id == user.id && personalNumber == user.personalNumber && zipCode == user.zipCode && firstName.equals(user.firstName) && lastName.equals(user.lastName) && birthdate.equals(user.birthdate) && password.equals(user.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, personalNumber, firstName, lastName, birthdate, password, zipCode);
    }
}
