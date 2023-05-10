import {Component, OnInit} from '@angular/core';
import {ElectionService} from "../../services/election/election.service";
import { StorageService } from '../../services/storage/storage.service';
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {UserService} from "../../services/user/user.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-landtagswahlbw',
  templateUrl: './landtagswahlbw.component.html',
  styleUrls: ['./landtagswahlbw.component.css']
})
export class LandtagswahlbwComponent implements OnInit {
  public electionData2: any; //wahlkreis
  public electionData3: any; //Erststimme
  public parties: any; //Zweitstimme
  public errorMessage: any;
  private userDetails: any;
  wahlForm: FormGroup;

  constructor(private electionService: ElectionService, private snackBar: MatSnackBar, private router: Router, private formBuilder: FormBuilder, private storageService: StorageService, private userService: UserService) {
    this.wahlForm = this.formBuilder.group({
      erststimme: null,
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

    this.getElection(2).subscribe(
      (data) => {
        console.log(data);
        this.electionData2 = data;
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
        this.electionData3 = data;
      }, (error) => {
        this.errorMessage = error.error.message;
        console.log(this.errorMessage);
      }
    )
  }

  toggleRadio(event: any, controlName: string) {
    if (this.wahlForm.get(controlName)?.value === event.value) {
      this.wahlForm.get(controlName)?.setValue(null);
    } else {
      this.wahlForm.get(controlName)?.setValue(event.value);
    }
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

  pushParty(politicalPartyId: number) {
    this.electionService.pushParty(this.userDetails.id, 2, politicalPartyId).subscribe({
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

  pushMember(politicalMemberIdList: Array<number>) {
    this.electionService.pushMember(this.userDetails.id, 2, politicalMemberIdList).subscribe({
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
