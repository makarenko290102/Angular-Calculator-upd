import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  
  public first: number = 1;
  public second: number = 1;

  public operation: string = '+';

  public operations: string[] = ['+', '-', '*', '/'];

  public result?: number;

  public calc(){
if(this.operation){
  switch(this.operation){
    case '+':
      this.result = this.first + this.second;
      break;
    case '-':
      this.result = this.first - this.second;
      break;
    case '*':
      this.result = this.first * this.second;
      break;
    case '/':
      this.result = this.first / this.second
  }
}
  }

}
