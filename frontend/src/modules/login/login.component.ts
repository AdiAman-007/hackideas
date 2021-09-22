import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user: any = "";
  loggedin: boolean = false;
  constructor(private _router: Router, private appService: AppService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      this._router.navigate(['home'])
    }
  }

  login() {
    this.appService.getUsers().subscribe(res => {
      if (res) {
        res.forEach((emp: any) => {
          if (emp['name'].toString() == this.user) {
            this.loggedin = true
            localStorage.setItem('user', this.user.toString())
            localStorage.setItem('upvotes', emp['upvotedChallenges'])
            this.appService.setUser(this.user)
            this.appService.setVotes(emp['upvotedChallenges'])
            this._router.navigate(['home'])
            return
          }
        })
        if (!this.loggedin) {
          alert("Invalid user")
        }
      }
      else {
        alert("Server is down")
        return
      }
    },
      err => alert("Server is down"))
  }

}
