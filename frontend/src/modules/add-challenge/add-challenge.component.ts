import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from 'src/services/app.service';
import { Challenges } from 'src/models/challenges.model';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-challenge',
  templateUrl: './add-challenge.component.html',
  styleUrls: ['./add-challenge.component.css']
})
export class AddChallengeComponent implements OnInit {
  tagsList: any = []
  levelsList: any = ['Easy', 'Medium', 'Hard']
  cuurentId: number = 0
  data: Challenges
  savedTags: Array<String> = []
  challengeForm = new FormGroup({
    title: new FormControl('', Validators.required),
    tags: new FormControl('', Validators.required),
    difficulty: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  })
  constructor(private appService: AppService) {
    this.data = {
      id: 0,
      title: '',
      tags: '',
      upvotes: 0,
      difficulty: '',
      creationDate: '',
      endDate: ''
    }
  }

  ngOnInit(): void {
    this.initializaForm()
  }

  initializaForm() {
    this.appService.setUser(localStorage.getItem('user'))
    this.appService.getTags().subscribe((res: any) => {
      res['tags'].forEach((value: any) => this.tagsList.push(value))
    })
    this.appService.getChallenges().subscribe((res: Array<any>) => {
      this.data = res[res.length - 1]
      this.cuurentId = this.data['id'] + 1
      this.challengeForm.addControl('id', new FormControl(this.cuurentId))
      this.challengeForm.addControl('upvotes', new FormControl(0))
      this.challengeForm.addControl('creationDate', new FormControl(new Date().toUTCString()))
    })
  }

  addTags() {
    let currentTag = this.challengeForm.get('tags')?.value
    if (!this.savedTags.includes(currentTag)) {
      this.savedTags.push(currentTag)
    }
    this.challengeForm.setValue({
      'id': this.challengeForm.get('id')?.value,
      'upvotes': this.challengeForm.get('upvotes')?.value,
      'creationDate': this.challengeForm.get('creationDate')?.value,
      'title': this.challengeForm.get('title')?.value,
      'tags': this.savedTags.join(''),
      'difficulty': this.challengeForm.get('difficulty')?.value,
      'endDate': this.challengeForm.get('endDate')?.value,
      'description': this.challengeForm.get('description')?.value
    })
  }

  submit() {
    if (this.challengeForm.valid) {
      this.appService.addChallenge(this.challengeForm.value).subscribe()
      this.challengeForm.reset()
      this.initializaForm()
    }
    else {
      alert("One or more input fields is/are empty")
    }
  }

}
