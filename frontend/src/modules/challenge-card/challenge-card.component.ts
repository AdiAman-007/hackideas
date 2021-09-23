import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/services/app.service';
import { toArray } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-challenge-card',
  templateUrl: './challenge-card.component.html',
  styleUrls: ['./challenge-card.component.css']
})
export class ChallengeCardComponent implements OnInit {
  @Input() cardData: any = {}
  user: any = localStorage.getItem('user');
  upvotes: any = localStorage.getItem('upvotes')?.split(',')
  render: boolean = false;
  constructor(private appService: AppService) {
    this.getData()
  }

  ngOnInit(): void {
  }

  getData(): void {
    this.user = localStorage.getItem('user');
    this.upvotes = localStorage.getItem('upvotes')?.split(',')
    this.render = true
  }

  upvote(data: any): void {
    this.render = false
    data['upvotes'] += 1
    if (!this.upvotes.includes(data['id'].toString()) || !this.upvotes.includes(data['id'])) {
      this.upvotes.push(data['id'].toString())
      localStorage.setItem('upvotes', this.upvotes)
      this.appService.upvoteChallenge([this.user, data]).subscribe(res => {
      })
    }
    setTimeout(() => { this.getData() }, 0)
  }
}
