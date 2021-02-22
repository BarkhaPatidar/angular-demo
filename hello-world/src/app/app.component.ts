import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { InteractionService } from './interaction.service';
import {TestComponent} from './test-comp/test-comp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  color: string;

  headClass = "heading-title title-bg";
  headClassToggle = true;
  titleFont = "font-weight: 600";

  items = [1,2,3,4,5];

  title: string = 'hello-world';
  name: string;
  userName: string;
  private _customerName: string;
  private num: number = 1234;
  isVisible: boolean = true;

  userLoggedIn = true;

  // childComponentRef: TestComponent;

  // @ViewChild('nameRef') nameElementRef: ElementRef;
  @ViewChild(TestComponent) childComponentRef: TestComponent;

  constructor(private _interactionService: InteractionService) { }

  greetStudent() {
    this._interactionService.sendMessage("Good Morning");
  }

  appreciateStudent() {
    this._interactionService.sendMessage("Well Done");
  }

  ngAfterViewInit() {
    // this.nameElementRef.nativeElement.focus();
    console.log(this.childComponentRef);
  }

  greet(companyName: string) {
    alert("Barkha! from " + companyName);
  }

  get customerName(): string {
    return this._customerName;
  }
  set customerName(value: string) {
    this._customerName = value;
    if(value === 'Barkha') {
      alert('Welcome back Barkha');
    }
  }

  user: {
    title : string
   } = {
    title: 'hello-world'
  }

  switchVisibility() {
    this.isVisible = !this.isVisible;
  }

  updateValue() {
    this.user.title = "hello-world-updates";
  }

  get counter() {
    return this.num;
  }

  set counter(value) {
    this.num = value;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  greetUser(updatedUserName) {
    this.userName = updatedUserName;
    if(updatedUserName === 'Barkha') {
      alert('Welcome back Barkha');
    }
  }

  canSave = true;
  isUnchanged = true;
  isSpecial = true;

  currentStyles = {
    'font-style':  this.canSave      ? 'italic' : 'normal',
    'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
    'font-size':   this.isSpecial    ? '24px'   : '12px'
  }
}
