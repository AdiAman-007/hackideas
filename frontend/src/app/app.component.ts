import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from 'src/modules/header/header.component';
import { AppService } from 'src/services/app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hackideas';
  showHamburger: boolean = false
  hamburger: boolean = false
  constructor(private _router: Router, private appService: AppService) {
    if (window.innerWidth < 700) {
      this.showHamburger = true
    }
    else this.showHamburger = false
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  closeNav() {
    this.hamburger = !this.hamburger
  }
}
