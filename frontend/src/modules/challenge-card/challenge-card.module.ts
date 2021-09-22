import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeCardComponent } from './challenge-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ChallengeCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ChallengeCardModule { }
