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
  constructor(private _router: Router, private appService: AppService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {

  }
}
