import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondScreenComponent } from './second-screen.component';

const routes: Routes = [
  {path : '', component : SecondScreenComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondScreenRoutingModule { }
