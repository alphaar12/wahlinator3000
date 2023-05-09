import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ElectionService {

  constructor(private http: HttpClient,) {
  }

  getElection(electionId: number) {
    return this.http.get(`${environment.apiUrl}/elections/election/${electionId}`);
  }

  getParties() {
    return this.http.get(`${environment.apiUrl}/elections/parties`);
  }

  getMembers() {
    return this.http.get(`${environment.apiUrl}/elections/members`);
  }

  getHasVoted(userId: number, electionId: number) {
    return this.http.post(`${environment.apiUrl}/elections/hasVoted`, {userId, electionId});
  }

  pushParty(userId: number, electionId:number, politicalPartyId:number) {
    return this.http.post(`${environment.apiUrl}/elections/vote/party`, {userId, electionId, politicalPartyId});
  }

  pushMember(userId: number, electionId:number, politicalMemberIdList:Array<number>) {
    return this.http.post(`${environment.apiUrl}/elections/vote/member`, {userId, electionId, politicalMemberIdList});
  }
}
