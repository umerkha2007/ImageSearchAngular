import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../material/material.module";
import { FirstScreenRoutingModule } from './first-screen.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstScreenComponent } from './first-screen.component';

@NgModule({
  declarations: [FirstScreenComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FirstScreenRoutingModule,
  ],
  entryComponents: [
    FirstScreenComponent
  ],
})
export class FirstScreenModule { }
