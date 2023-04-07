package de.wahlinator.payload.response;

import java.util.List;

public class UserInfoResponse {
    private int id;
    private String personalNumber;
    private List<String> roles;

    public UserInfoResponse(int id, String personalNumber, List<String> roles) {
        this.id = id;
        this.personalNumber = personalNumber;
        this.roles = roles;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPersonalNumber() {
        return personalNumber;
    }

    public void setPersonalNumber(String personalNumber) {
        this.personalNumber = personalNumber;
    }

    public List<String> getRoles() {
        return roles;
    }
}
