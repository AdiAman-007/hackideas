import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddChallengeComponent } from './add-challenge.component';
import { HttpClientModule } from '@angular/common/http';
import { AddChallengeRouteModule } from './add-challenge-route.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppService } from 'src/services/app.service';

@NgModule({
  declarations: [
    AddChallengeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AddChallengeRouteModule,
    ReactiveFormsModule
  ],
  providers: [AppService]
})
export class AddChallengeModule { }
