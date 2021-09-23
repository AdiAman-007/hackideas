import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/services/app.service';
import { filter } from 'rxjs/operators';
import * as _ from 'underscore';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  tag: any = []
  selectedTags: any = []
  cardDataList: any = []
  tempList = []
  user: any = {};
  selectedSort: String = "creation date"
  sortFilters: string[] = ['creation date', 'upvotes', 'end date'];
  showFilters: boolean = true
  constructor(private appService: AppService) {
    this.appService.getTags().subscribe((res) => {
      this.tag = res['tags']
    })
    this.appService.getChallenges().subscribe((res) => {
      this.cardDataList = res
      this.tempList = res
    })
  }

  ngOnInit(): void {
    this.appService.setUser(localStorage.getItem('user'))
    this.appService.getUsers().subscribe(res => {
      let upvotes: any = []
      res.forEach((value: any) => {
        if (value['name'] == localStorage.getItem('user')) {
          upvotes = localStorage.getItem('upvotes')
        }
      })
      this.appService.setVotes(upvotes)
      localStorage.setItem('upvotes', upvotes)
    })
  }

  selectTags(value: any) {
    this.selectedTags = value
    if (this.selectedTags.length > 0) {
      this.cardDataList = new Array()
      this.selectedTags.forEach((tag: any) => {
        this.tempList.forEach((card: any) => {
          if (card['tags'].includes(tag)) {
            if (!this.cardDataList.includes(card)) {
              this.cardDataList.push(card)
            }
          }
        })
      })
    }
    else {
      this.cardDataList = Object.assign(this.tempList)
    }
  }

  sortChallenges() {
    switch (this.selectedSort) {
      case "creation date": {
        this.cardDataList = _.sortBy(this.cardDataList, 'creationDate').reverse()
        break;
      }
      case "upvotes": {
        this.cardDataList = _.sortBy(this.cardDataList, 'upvotes').reverse()
        break;
      }
      case "end date": {
        this.cardDataList = _.sortBy(this.cardDataList, 'endDate').reverse()
        break;
      }
      default: {
        break;
      }
    }
  }

  hideFilters() {
    this.showFilters = !this.showFilters
  }
}
