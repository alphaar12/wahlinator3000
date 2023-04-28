package de.wahlinator.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "political_member")
public class PoliticalMember implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private int id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "description")
    private String profession;

    @Column(name = "political_party_id")
    private Integer political_party_id;

    public PoliticalMember(String firstName, String lastName, String profession, Integer political_party_id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.profession = profession;
        this.political_party_id = political_party_id;
    }

    public PoliticalMember() {
        super();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }

    public Integer getPolitical_party_id() {
        return political_party_id;
    }

    public void setPolitical_party_id(Integer political_party_id) {
        this.political_party_id = political_party_id;
    }
}
