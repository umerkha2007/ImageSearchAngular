import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstScreenComponent } from './first-screen/first-screen.component';

const routes: Routes = [
  { path: '', redirectTo: '/first-screen', pathMatch: 'full' },
  { path: 'first-screen', loadChildren: () => import('./first-screen/first-screen.module').then(m => m.FirstScreenModule)},
  { path: 'second-screen', loadChildren: () => import('./second-screen/second-screen.module').then(m => m.SecondScreenModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
