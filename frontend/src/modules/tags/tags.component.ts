import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/services/app.service';


@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input() tag: any = []
  selectedTagsMap: any = {}
  selectedTags: any = []
  @Output() selectedEmitter = new EventEmitter<any>()
  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  selectTag(t: any) {
    this.selectedTagsMap[t] = !this.selectedTagsMap[t]
    for (let items in this.selectedTagsMap) {
      if (this.selectedTagsMap[items] && !this.selectedTags.includes(items)) {
        this.selectedTags.push(items)
      }
      if (!this.selectedTagsMap[items] && this.selectedTags.includes(items)) {
        delete this.selectedTags[this.selectedTags.indexOf(items.toString())]
        this.selectedTags = this.selectedTags.filter((value: any) => {
          return !this.selectedTags[this.selectedTags.indexOf(items.toString())]
        })
      }
    }
    this.selectedEmitter.emit(this.selectedTags)
  }
}
