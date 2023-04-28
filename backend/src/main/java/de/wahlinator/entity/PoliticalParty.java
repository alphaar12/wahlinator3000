package de.wahlinator.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "political_party")
public class PoliticalParty implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "abbrevation")
    private String abbrevation;

    public PoliticalParty(String name, String abbrevation) {
        this.name = name;
        this.abbrevation = abbrevation;
    }

    public PoliticalParty() {
        super();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAbbrevation() {
        return abbrevation;
    }

    public void setAbbrevation(String abbrevation) {
        this.abbrevation = abbrevation;
    }
}
