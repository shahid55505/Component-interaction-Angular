import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  
  div{

    background: gray;
    padding: 20px;
  }
  
  `]
})
export class AppComponent {
  title = 'demo';
  public name="You are Shahid Khan";
  public message=" ";
  

}
