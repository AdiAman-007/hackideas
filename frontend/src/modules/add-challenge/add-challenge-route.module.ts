import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddChallengeComponent } from './add-challenge.component';

const routes: Routes = [
  {
    path: '',
    component: AddChallengeComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddChallengeRouteModule { }
