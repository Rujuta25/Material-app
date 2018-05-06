import { MatSnackBar } from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  answer : string = '';
  party : string = '';
  answerDisplay: string = '';
  showSpinner: boolean = false;
  panelOpenState: boolean = false;
  typesOfItems = ['Drivers License', 'SSN', 'Work Permit', 'Relocation Assistance'];
  

  constructor(public snackBar: MatSnackBar) {
   
  }
  
  

 
  
  


  showAnswer(){
    this.showSpinner = true;

    setTimeout(() => {
   
       this.answerDisplay = this.answer; 
       this.showSpinner = false;
    }, 2000) 
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }


}
