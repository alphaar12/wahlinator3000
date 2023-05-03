import { Component } from '@angular/core';

@Component({
  selector: 'app-bundestagswahl',
  templateUrl: './bundestagswahl.component.html',
  styleUrls: ['./bundestagswahl.component.css']
})
export class BundestagswahlComponent {

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


