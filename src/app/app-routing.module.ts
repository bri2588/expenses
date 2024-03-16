import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SigninComponent} from "./pages/signin/signin.component";



const routes: Routes = [
  {path: 'signin',
  loadChildren: () => import('./pages/signin/signin.module').then(m => m.SigninModule) }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
