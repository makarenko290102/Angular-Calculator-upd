import { Component } from '@angular/core';
import { countReset } from 'console';
import { start } from 'repl';




interface ICalcGroup {
  first: CalcVar,
  second: CalcVar,
  operation: EnumCalcOperations
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
  square = 'square', 
  sqrt = 'sqrt'
}


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})

export class CalculatorComponent {

  public calcOperations = EnumCalcOperations
  public calcModific = EnumCalcModific
  public calcGroups : ICalcGroup[] = [
    {
    first:{
      value: 10,
      modificator: EnumCalcModific.none
    },
    second: {
      value: 20,
      modificator: EnumCalcModific.none
    },
    operation: EnumCalcOperations.plus
    } 
  ]

  public logHistory: string[] = [];  //сбоку

  public operationBetwGroups: EnumCalcOperations[] = [];
  
  public result? : number;

  public addGroup(): void {
    this.calcGroups.push({
      first:{
        value: 0, 
        modificator: EnumCalcModific.none
      },
      second:{
        value:0,
        modificator: EnumCalcModific.none
      },
      operation: EnumCalcOperations.plus
    })
  }
  
  public removeGroup(index: number):void{
    this.calcGroups.splice(index, 1)
  }
  
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
