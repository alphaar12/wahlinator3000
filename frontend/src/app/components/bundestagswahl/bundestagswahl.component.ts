import {Component, OnInit} from '@angular/core';
import {ElectionService} from '../../services/election/election.service';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-bundestagswahl',
  templateUrl: './bundestagswahl.component.html',
  styleUrls: ['./bundestagswahl.component.css']
})
export class BundestagswahlComponent implements OnInit {
  public electionData1: any; //date
  public electionData2: any; //wahlkreis
  public electionData3: any; //Erststimme
  public electionData4: any; //Zweitstimme
  public errorMessage: any;

  constructor(private electionService: ElectionService) {
  }
  
  
  function validateForm(): boolean {
  const erststimme = document.getElementsByName("erststimme") as NodeListOf<HTMLInputElement>;
  const zweitstimme = document.getElementsByName("zweitstimme") as NodeListOf<HTMLInputElement>;
  if (!isChecked(erststimme) || !isChecked(zweitstimme)) {
    alert("Bitte wählen Sie maximal eine Option aus dem jeweiligen Formular.");
    return false;
  }
  return true;
}

function isChecked(option: NodeListOf<HTMLInputElement>): boolean {
  for (let i = 0; i < option.length; i++) {
    if (option[i].checked) {
      return true;
    }
  }
  return false;
}


  ngOnInit(): void {
    this.getElection(1).subscribe(
      (data) => {
        console.log(data);
        this.electionData1 = data;
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

    this.getParties().subscribe(
      (data) => {
        console.log(data);
        this.electionData4 = data;
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
}



