import {Component, OnInit} from '@angular/core';
import {ElectionService} from "../../services/election/election.service";
import { StorageService } from '../../services/storage/storage.service';
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-landtagswahlbw',
  templateUrl: './landtagswahlbw.component.html',
  styleUrls: ['./landtagswahlbw.component.css']
})
export class LandtagswahlbwComponent implements OnInit {
  public electionData2: any; //wahlkreis
  public electionData3: any; //Erststimme
  public electionData4: any; //Zweitstimme
  public errorMessage: any;
  private userDetails: any;

  constructor(private electionService: ElectionService, private snackBar: MatSnackBar, private router: Router, private storageService: StorageService, private userService: UserService) {
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
