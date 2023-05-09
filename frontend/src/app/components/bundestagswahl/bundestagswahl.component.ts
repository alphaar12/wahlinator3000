import {Component, OnInit} from '@angular/core';
import {ElectionService} from '../../services/election/election.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from "@angular/router";
import {StorageService} from "../../services/storage/storage.service";
import {UserService} from "../../services/user/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-bundestagswahl',
  templateUrl: './bundestagswahl.component.html',
  styleUrls: ['./bundestagswahl.component.css']
})
export class BundestagswahlComponent implements OnInit {
  public electionData1: any; //date
  public electionData2: any;
  public Erststimme: any;
  public Zweitstimme: any;
  public errorMessage: any;
  public userDetails: any;
  wahlForm: FormGroup;

  constructor(private electionService: ElectionService, private snackBar: MatSnackBar, private formBuilder: FormBuilder, private router: Router, private storageService: StorageService, private userService: UserService) {
    this.wahlForm = this.formBuilder.group({
      erststimme: ['', Validators.required],
      zweitstimme: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.userService.getUserByPersonalNumber(this.storageService.getUser().personalNumber).subscribe(
      (data) => {
        this.userDetails = data;
      },
      (error) => {
        this.errorMessage = error.error.message;
        console.log(this.errorMessage);
      }
    );
    this.getElection(1).subscribe(//Bundestagswhl
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

  pushParty(politicalPartyId:number) {
    this.electionService.pushParty(this.userDetails.userId, 1, politicalPartyId).subscribe({
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

  pushMember(politicalMemberIdList:Array<number>) {
    this.electionService.pushMember(this.userDetails.userId, 1, politicalMemberIdList).subscribe({
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



