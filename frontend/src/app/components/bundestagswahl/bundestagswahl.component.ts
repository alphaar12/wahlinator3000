import {Component, OnInit} from '@angular/core';
import {ElectionService} from '../../services/election/election.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from "@angular/router";

@Component({
  selector: 'app-bundestagswahl',
  templateUrl: './bundestagswahl.component.html',
  styleUrls: ['./bundestagswahl.component.css']
})
export class BundestagswahlComponent implements OnInit {
  public electionData1: any; //date
  public Erststimme: any; 
  public Zweitstimme: any;
  public errorMessage: any;

  constructor(private electionService: ElectionService, private snackBar: MatSnackBar, private router: Router) {
  }

  ngOnInit(): void {
    this.getElection(1).subscribe(//Bundestagswahl
      (data) => {
        console.log(data);
        this.electionData1 = data;
      },
      (error) => {
        this.errorMessage = error.error.message;
        console.log(this.errorMessage);
      }
    );

    this.getMembers().subscribe(
      (data) => {
        console.log(data);
        this.Erststimme = data;
      }, (error) => {
        this.errorMessage = error.error.message;
        console.log(this.errorMessage);
      }
    )

    this.getParties().subscribe(
      (data) => {
        console.log(data);
        this.Zweitstimme = data;
      }, (error) => {
        this.errorMessage = error.error.message;
        console.log(this.errorMessage);
      }
    )
  }

  getElection(electionId: number): Observable<any> {
    return this.electionService
      .getElection(electionId)
      .pipe(catchError(this.handleError));
  }

  getMembers(): Observable<any> {
    return this.electionService
      .getMembers()
      .pipe(catchError(this.handleError));
  }

  getParties(): Observable<any> {
    return this.electionService
      .getParties()
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

  pushParty(userId: number, electionId: number, politicalPartyId:number) {
    this.electionService.pushParty(userId, electionId, politicalPartyId).subscribe({
      next: data => {
        this.snackBar.open('Wahl wurde erfolgreich durchgeführt!', 'OK', {
          duration: 3000
        });
        this.router.navigate([`/wahlAuswahl`]).then(() => {
          window.location.reload();
        });
      },
      error: err => {
        this.snackBar.open('Wahl fehlgeschlagen! ' + this.errorMessage, 'OK', {
          duration: 3000
        });
      }
    });
  }

  pushMember(userId: number, electionId: number, politicalMemberIdList:Array<number>) {
    this.electionService.pushMember(userId, electionId, politicalMemberIdList).subscribe({
      next: data => {
        this.snackBar.open('Wahl wurde erfolgreich durchgeführt!', 'OK', {
          duration: 3000
        });
        this.router.navigate([`/wahlAuswahl`]).then(() => {
          window.location.reload();
        });
      },
      error: err => {
        this.snackBar.open('Wahl fehlgeschlagen! ' + this.errorMessage, 'OK', {
          duration: 3000
        });
      }
    });
  }
}



