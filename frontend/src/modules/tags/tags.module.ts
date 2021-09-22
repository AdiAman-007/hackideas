import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsComponent } from './tags.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TagsComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ]
})
export class TagsModule { }
