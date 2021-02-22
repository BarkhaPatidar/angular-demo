import { Component, ViewChild, AfterViewInit } from '@angular/core';
// import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { FirstComponent } from './first/first.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'routing-app';

  @ViewChild(FirstComponent, { read: FirstComponent }) child?: FirstComponent; 

  constructor() {}

  ngAfterViewInit() {
    console.log(this.child?.selId());
  }
  
}
