import {Component, OnInit} from '@angular/core';
import {ElectionService} from '../../services/election/election.service';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {UserService} from "../../services/user/user.service";
import {StorageService} from "../../services/storage/storage.service";


@Component({
  selector: 'app-wahl-auswahl',
  templateUrl: './wahl-auswahl.component.html',
  styleUrls: ['./wahl-auswahl.component.css'],
})

export class WahlAuswahlComponent implements OnInit {
  public electionData1: any;
  public electionData2: any;

  private userDetails: any;
  public errorMessage: any;

  private landtagId = 1;
  public landtagRoute = '';

  public hasVoted1 = true;
  public hasVoted2 = true;

  public showButton1 = false;
  public showButton2 = false;

  constructor(private electionService: ElectionService, private userService: UserService, private storageService: StorageService) {
  }

  ngOnInit(): void {
    this.userService.getUserByPersonalNumber(this.storageService.getUser().personalNumber).subscribe((data) => {
        this.userDetails = data;
        this.landtagRoute = this.voteRouting();
        this.getElection(1).subscribe(
          (data) => {
            console.log(data);
            this.electionData1 = data;
            this.showButton1 = this.checkAge(this.electionData1);
          },
          (error) => {
            this.errorMessage = error.error.message;
            console.log(this.errorMessage);
          }
        );
        this.getElection(this.landtagId).subscribe(
          (data) => {
            this.electionData2 = data;
            this.showButton2 = this.checkAge(this.electionData2);
          },
          (error) => {
            this.errorMessage = error.error.message;
            console.log(this.errorMessage);
          }
        );
        this.electionService.getHasVoted(this.userDetails.id, 1).subscribe((data) => {
          this.hasVoted1 = (data.toString() == "true");
          },
          (error) => {
            this.errorMessage = error.error.message;
            console.log(this.errorMessage);
          });

        this.electionService.getHasVoted(this.userDetails.id, this.landtagId).subscribe((data) => {
            this.hasVoted2 = (data.toString() == "true");
          },
          (error) => {
            this.errorMessage = error.error.message;
            console.log(this.errorMessage);
          });
      },
      (error) => {
        this.errorMessage = error.error.message;
        console.log(this.errorMessage);
      });

  }

  getElection(electionId: number): Observable<any> {
    return this.electionService
      .getElection(electionId)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

  checkIfElectionHasStarted(electionStartDate: string): boolean {
    let now = new Date();
    let electionDate = new Date(electionStartDate);
    return now > electionDate;
  }

  checkAge(electionData: any): boolean {
    let birthdate = Date.parse(this.userDetails.birthdate);
    var timeDiff = Math.abs(Date.now() - birthdate);
    var age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    return age > electionData.age;
  }

  voteRouting(): string {
    let route: string;
    switch (this.userDetails.federalState) {
      case 'Baden Württemberg': {
        route = '/landtagswahl1';
        this.landtagId = 2;
        break;
      }
      case 'Saarland': {
        route = '/landtagswahl2';
        this.landtagId = 3;
        break;
      }
      default: {
        route = '/landtagswahl3';
        this.landtagId = 4;
        break;
      }
    }
    return route;
  }
}
