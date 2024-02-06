import { NgModule } from '@angular/core';

//import { NameComponent } from './name.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [FormsModule, BrowserModule],
    exports: [CalculatorComponent],
    declarations: [CalculatorComponent],
    providers: [],
})
export class CalculatorModule { }
