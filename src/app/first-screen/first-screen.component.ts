import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataService } from '../services/data/data.service';
@Component({
  selector: 'app-first-screen',
  templateUrl: './first-screen.component.html',
  styleUrls: ['./first-screen.component.scss']
})
export class FirstScreenComponent implements OnInit {

  firstNameForm: FormGroup;
  firstNamePattern : any = '^[a-zA-Z]+$'
  
  constructor(
    private route: Router,
    private dataService: DataService, 
    private _snackBar: MatSnackBar) { 
    this.firstNameForm = new FormGroup({
      firstName: new FormControl('', [Validators.required,Validators.pattern(this.firstNamePattern)]),
    });
  }
  ngOnInit(): void {
   
  }
  onSubmit(firstNameForm: FormGroup) {
    if (firstNameForm.valid) {
      this._submit(firstNameForm.value);
    } else {
      this._snackBar.open('Please Enter Correct First Name','', {
        duration: 2000,
      });
    }
  }
  
  _submit(data: any) {
    console.log(data);
    this.dataService.firstName = data.firstName;
    this.route.navigate(['../second-screen']);
  }

}
