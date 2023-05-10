import {Component, OnInit} from '@angular/core';
import {ElectionService} from '../../services/election/election.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Observable, throwError, Subscription} from 'rxjs';
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
  public members: any;
  public parties: any;
  public errorMessage: any;
  public userDetails: any;
  wahlForm: FormGroup;
  formSubscription?: Subscription;
  selectedParty: any;

  constructor(private electionService: ElectionService, private snackBar: MatSnackBar, private formBuilder: FormBuilder, private router: Router, private storageService: StorageService, private userService: UserService) {
    this.wahlForm = this.formBuilder.group({
      erststimme: null,
      zweitstimme: null
    });
  }

  ngOnInit(): void {
    this.userService.getUserByPersonalNumber(this.storageService.getUser().personalNumber).subscribe(
      (data) => {
        this.userDetails = data;
        console.log(this.userDetails);
      },
      (error) => {
        this.errorMessage = error.error.message;
        console.log(this.errorMessage);
      }
    );
    this.getElection(1).subscribe(//Bundestagswahl
      (data) => {
        console.log(data);
        this.electionData1 = data;
        this.parties = data.parties;
      },
      (error) => {
        this.errorMessage = error.error.message;
        console.log(this.errorMessage);
      }
    );

    this.getMembers().subscribe(
      (data) => {
        console.log(data);
        this.members = data;
      }, (error) => {
        this.errorMessage = error.error.message;
        console.log(this.errorMessage);
      }
    );
  }

  toggleRadio(event: any, controlName: string) {
    if (this.wahlForm.get(controlName)?.value === event.value) {
      this.wahlForm.get(controlName)?.setValue(null);
    } else {
      this.wahlForm.get(controlName)?.setValue(event.value);
    }
  }

  onSelectionChange(party: any) {
    this.selectedParty = party;
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

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

  print(){
    let id:number;
    if (this.selectedParty) {
      id = this.selectedParty.id
    } else {
      id = 0;
    }
    console.log(id);
  }

  pushParty() {
    let id:number;
    if (this.selectedParty) {
      id = this.selectedParty.id
    } else {
      id = 0;
    }
    this.electionService.pushParty(this.userDetails.id, 1, id).subscribe({
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
    this.electionService.pushMember(this.userDetails.id, 1, politicalMemberIdList).subscribe({
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
