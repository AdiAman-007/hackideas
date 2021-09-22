import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouteModule } from './dashboard-route.module';
import { TagsComponent } from '../tags/tags.component';
import { ChallengeCardComponent } from '../challenge-card/challenge-card.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DashboardComponent,
    TagsComponent,
    ChallengeCardComponent
  ],
  imports: [
    CommonModule,
    DashboardRouteModule,
    FormsModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
