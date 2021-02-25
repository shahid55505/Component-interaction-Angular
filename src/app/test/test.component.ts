import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-test',
  template: `

  <div>
   <h2> Child Component </h2>
   <h2 > {{"This message, \'" + parentData+ "\', is coming from root component" }}. </h2> 
   <button (click)="fireEvent()"> Send Event </button>
  <div>
  
  
  `,
  styles: [`
  
  div{

    background: green;
    padding: 20px;
  }
  
  button{
    color: red;
  }
  
  `]
})
export class TestComponent implements OnInit {

  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

fireEvent(){

  this.childEvent.emit("This message is coming from child component");
}

}
