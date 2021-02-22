import { Component,OnInit, OnChanges, DoCheck, AfterContentInit, SimpleChange, SimpleChanges, OnDestroy, Input, EventEmitter, Output } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
    selector: 'test-comp',
    templateUrl: './test-comp.component.html',
    styleUrls: ['./test-comp-overview.component.css']
})

export class TestComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, OnDestroy {
    
    @Output() greetEvent = new EventEmitter();
    companyName = "Newput";

    private myNumber: number;
    @Input() myTitle;
    @Input('loggedIn') loginFlag: boolean;
    newName = 'Barkha';
    constructor(private _interactionService: InteractionService) { }

    @Input()
    set myNewNumber(number: number) {
        this.myNumber = number
    }

    get myNewNumber() {
        return this.myNumber;
    }

    ngOnChanges(changes: SimpleChanges) {
        const newNumberChange: SimpleChange = changes.myNewNumber;
        if(newNumberChange) {
            console.log("preivious Value = ", newNumberChange.previousValue);
            console.log("current Value = ", newNumberChange.currentValue);
            this.myNewNumber = newNumberChange.currentValue;
        }
    }

    greetBarkha() {
        alert('Hello!');
    }

    callParentGreet() {
        this.greetEvent.emit(this.companyName);
    }

    ngOnInit() {
        console.log("ngOnInit Value = ", this.myNewNumber);
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

    ngDoCheck() {
        console.log("ngDoCheck Value = ", this.myTitle);
    }

    ngAfterContentInit() {
        console.log("ngAfterContentInit----");
    }

    ngAfterContentChecked() {
        console.log("ngAfterContentChecked---");
    }

    ngAfterViewInit() {
        console.log("ngAfterViewInit--");
    }

    ngAfterViewChecked() {
        console.log("ngAfterViewChecked-");
    }

    ngOnDestroy() {
        console.log("component has been destroyed");
    }
}