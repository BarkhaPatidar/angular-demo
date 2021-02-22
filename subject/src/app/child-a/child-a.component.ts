import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../services/interaction.service';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.scss']
})
export class ChildAComponent implements OnInit {

  constructor(private _interactionService: InteractionService) { }

  greetStudent() {
    this._interactionService.sendMessage("Good Morning");
  }

  appreciateStudent() {
    this._interactionService.sendMessage("Well Done");
  }

  ngOnInit(): void {
  }

}
