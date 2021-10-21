import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../material/material.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SecondScreenRoutingModule } from './second-screen.routing';
import { SecondScreenComponent } from './second-screen.component';


@NgModule({
  declarations: [
    SecondScreenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SecondScreenRoutingModule
  ]
})
export class SecondScreenModule { }
