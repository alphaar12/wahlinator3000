import { Component, OnInit } from '@angular/core';
import { ElectionService } from '../../services/election/election.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-wahl-auswahl',
  templateUrl: './wahl-auswahl.component.html',
  styleUrls: ['./wahl-auswahl.component.css'],
})
export class WahlAuswahlComponent implements OnInit {
  public electionData1: any;
  public electionData2: any;
  public errorMessage: any;

  constructor(private electionService: ElectionService) {}

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
}
