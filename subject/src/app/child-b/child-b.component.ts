import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../services/interaction.service';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.scss']
})
export class ChildBComponent implements OnInit {

  constructor(private _interactionService: InteractionService) { }

  ngOnInit() {
    this._interactionService.teacherMessage$
      .subscribe(
        message => {
          if(message === "Good Morning") {
            alert("Good morning teacher");
          } else {
            alert("Thank you teacher");
          }
        }
      );
  }

}
