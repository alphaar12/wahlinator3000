import {Component, OnInit} from '@angular/core';
import {ElectionService} from "../../services/election/election.service";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {StorageService} from "../../services/storage/storage.service";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-landtagswahlsl',
  templateUrl: './landtagswahlsl.component.html',
  styleUrls: ['./landtagswahlsl.component.css']
})
export class LandtagswahlslComponent implements OnInit {
  public electionData2: any; //wahlkreis
  public members: any; //Erststimme
  public parties: any; //Zweitstimme
  public errorMessage: any;
  private userDetails: any;
  wahlForm: FormGroup;
  selectedParty: any;
  selectedMember: any;

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

    this.getElection(3).subscribe(
      (data) => {
        console.log(data);
        this.electionData2 = data;
        this.parties = data.parties;
      },
      (error) => {
        this.errorMessage = error.error.message;
        console.log(this.errorMessage);
        }
      )
    }

  onSelectionChange(party: any) {
    this.selectedParty = party;
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

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

  onSelectionMemberChange(member: any) {
    this.selectedMember = member;
  }


 //Saarland pushParty
  pushParty(politicalPartyId: number) {
    this.electionService.pushParty(this.userDetails.id, 3, politicalPartyId).subscribe({
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
