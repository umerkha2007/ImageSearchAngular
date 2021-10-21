import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data/data.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { RestApiService } from '../services/rest-api/rest-api.service';

@Component({
  selector: 'app-second-screen',
  templateUrl: './second-screen.component.html',
  styleUrls: ['./second-screen.component.scss']
})
export class SecondScreenComponent implements OnInit {
  response = {} as ImageResponse;
  imageSearchForm: FormGroup;
  queryPattern : any = '^[a-zA-Z]+$'
  constructor(
    private route: Router,
    private apiService: RestApiService,
    public dataService: DataService,
    private _snackBar: MatSnackBar) {
    if(!this.dataService.firstName) {
      this.route.navigate(['../first-screen']);
    }
    this.imageSearchForm = new FormGroup({
      searchQuery: new FormControl('', [Validators.required, Validators.pattern(this.queryPattern)]),
    });
   }

  ngOnInit(): void {
  }

  onSubmit(imageSearchForm: FormGroup) {
    if (imageSearchForm.valid) {
      this._submit(imageSearchForm.value);
    } else {
      this._snackBar.open('Please Enter Valid Search Query','', {
        duration: 2000,
      });
    }
  }
  _submit(data: any) {
    console.log(data.searchQuery);
    this.apiService.getWithoutToken(data.searchQuery).then((data: any) => {
        this.response = data;
    },
      (error: any) => {
          this._snackBar.open(error,'', {
        duration: 2000,
        });
      }
    );
  }

}

export interface ImageResponse {
  results? : Array<any>,
  updated_at? : string,
  total?: number
  description?: string,
  alt_description?: string,
}
