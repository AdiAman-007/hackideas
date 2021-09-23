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
  openhamburger: boolean = false
  desktopHeader: boolean = true
  constructor(private _router: Router, private appService: AppService) {
    this.detectClientWidth()
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  detectClientWidth(){
    if (window.innerWidth < 800) {
      this.showHamburger = true
      this.openhamburger = true
    }
    else {
      this.showHamburger = false
      this.openhamburger = true
    }
  }

  closeNav() {
    this.openhamburger = !this.openhamburger
  }
}
