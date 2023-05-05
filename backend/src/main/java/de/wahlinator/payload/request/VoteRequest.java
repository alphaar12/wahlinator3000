package de.wahlinator.payload.request;

import java.util.ArrayList;

public class VoteRequest {
    private int userId;

    private int electionId;

    private int politicalPartyId;

    private ArrayList<Integer> politicalMemberIdList = new ArrayList<>();

    public VoteRequest(int userId, int electionId, int politicalPartyId) {
        this.userId = userId;
        this.electionId = electionId;
        this.politicalPartyId = politicalPartyId;
    }

    public VoteRequest(int userId, int electionId, ArrayList<Integer> politicalMemberIdList) {
        this.userId = userId;
        this.electionId = electionId;
        this.politicalMemberIdList = politicalMemberIdList;
    }

    public VoteRequest(int userId, int electionId) {
        this.userId = userId;
        this.electionId = electionId;
    }

    public VoteRequest() {
        super();
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getElectionId() {
        return electionId;
    }

    public void setElectionId(int electionId) {
        this.electionId = electionId;
    }

    public int getPoliticalPartyId() {
        return politicalPartyId;
    }

    public void setPoliticalPartyId(int politicalPartyId) {
        this.politicalPartyId = politicalPartyId;
    }

    public ArrayList<Integer> getPoliticalMemberIdList() {
        return politicalMemberIdList;
    }

    public void setPoliticalMemberIdList(ArrayList<Integer> politicalMemberIdList) {
        this.politicalMemberIdList = politicalMemberIdList;
    }
}
