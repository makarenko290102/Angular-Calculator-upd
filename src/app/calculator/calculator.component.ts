import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})

interface ICalcGroup {
  first: CalcVar,
  second: CalcVar,
  iperation: EnumCalcOperations
}

interface CalcVar{
  value: number
  modificator: EnumCalcModific
}

enum EnumCalcOperations {
  plus = '+',
  minus = '-',
  multiply = '*',
  divide = '/'
}

enum EnumCalcModific {
  none = 'none',
  sin = 'sin',
  cos = 'cos',
  square = 'square'
}






export class CalculatorComponent {

  public calcOperations = EnumCalcOperation
  public calcModific = EnumCalcModific
  public calcGroup : ICalcGroup[] = [
    {
    first:{
      value: 10,
      modificator: EnumCalcModific.none
    },
    second: {
      value: 20,
      modificator: EnumCalcModific.none
    },
    operations: EnumCalcOperations.plus
    } 
  ]

  public logHistory: string[] = [];

  public operationBetwGroups: EnumCalcOperations//[] = [];

  
  //public first: number = 1;
  //public second: number = 1;

  //public operation: string = '+';

  //public operations: string[] = ['+', '-', '*', '/'];

  //public result?: number;

  //public calc(){
//if(this.operation){
  //switch(this.operation){
   // case '+':
      //this.result = this.first + this.second;
    //  break;
    //case '-':
     // this.result = this.first - this.second;
     // break;
    //case '*':
      //this.result = this.first * this.second;
     // break;
    //case '/':
     // this.result = this.first / this.second
  
 // }
//}
// }

}



//допилить, добавить что-нибудь типа cos, sin и тд
//интерфейсы, enum, методы для подсчета
