package de.wahlinator.payload.response;

import java.sql.Date;
import java.util.List;

public class ElectionInfoResponse {
    private int id;
    private String type;
    private String region;
    private int votes;
    private int age;
    private Date startDate;
    private Date endDate;
    private List<?> parties;
    private List<?> partyMembers;

    public ElectionInfoResponse(int id, String type, String region, int votes, int age, Date startDate, Date endDate, List<?> parties, List<?> partyMembers) {
        this.id = id;
        this.type = type;
        this.region = region;
        this.votes = votes;
        this.age = age;
        this.startDate = startDate;
        this.endDate = endDate;
        this.parties = parties;
        this.partyMembers = partyMembers;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public int getVotes() {
        return votes;
    }

    public void setVotes(int votes) {
        this.votes = votes;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public List<?> getParties() {
        return parties;
    }

    public void setParties(List<?> parties) {
        this.parties = parties;
    }

    public List<?> getPartyMembers() {
        return partyMembers;
    }

    public void setPartyMembers(List<?> partyMembers) {
        this.partyMembers = partyMembers;
    }
}
