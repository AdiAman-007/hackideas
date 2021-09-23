import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { AppConfig } from 'src/models/app-config.model';
import { AppService } from 'src/services/app.service';
import { ElementRef, ViewChild } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  appConfig: AppConfig = new AppConfig("")
  user: any = ""
  constructor(private appService: AppService, private router: Router) {
  }

  ngOnInit(): void {
    this.appService.getAppConfig().subscribe((res) => {
      this.appConfig = res
    })
    this.appService.getUser().subscribe(res => {
      if (res !== undefined || res !== null) {
        this.user = res
      }
    })
    this.user = localStorage.getItem('user')
  }

  logout() {
    this.appService.setUser(null)
    this.appService.setVotes(null)
    localStorage.removeItem('user')
    localStorage.removeItem('upvotes')
    this.router.navigate(['login'])
  }

  selectNav(links: any) {
  }
}
