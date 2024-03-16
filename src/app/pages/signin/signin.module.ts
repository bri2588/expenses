import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import {RouterModule, Routes} from "@angular/router";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


const routes: Routes = [
  {path: '', component: SigninComponent}
]

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatLabel,
    MatFormField,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule

  ]
})
export class SigninModule { }
