import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  input: string = '';
  firstOperand: number | null = null;
  operator: string | null = null;
  result: number | null = null;
  currentNumber: string = ''; 

  pressNum(num: string) {
    this.input += num;
  }

  pressOperator(op: string) {
    this.operator = op;
    this.firstOperand = parseFloat(this.input);
    this.input = '';
  }

  getAnswer() {
    const secondOperand = parseFloat(this.input);
    let result = 0;
  
    if (this.firstOperand !== null && this.operator) {
      switch (this.operator) {
        case '+':
          result = this.firstOperand + secondOperand;
          break;
        case '-':
          result = this.firstOperand - secondOperand;
          break;
        case '*':
          result = this.firstOperand * secondOperand;
          break;
        case '/':
          result = this.firstOperand / secondOperand;
          break;
      }
    }
  
    return result;
  }
  allClear() {
    this.input = '';
    this.firstOperand = null;
    this.operator = null;
    this.result = null;
  }
  clear() {
    this.input = '';
    this.result = null;
  }
  getOperation(operator: string) {
    if (this.operator !== null && this.input !== '') {
      this.calculate();
    }
    this.operator = operator;
    this.firstOperand = parseFloat(this.input);
    this.input = '';
  }
  getNumber(num: string) {
    this.input += num;
  }
  getDecimal() {
    if (!this.input.includes('.')) {
      this.input += '.';
    }
  }
  calculate() {
    const secondOperand = parseFloat(this.input);
    let result = 0;
  
    if (this.firstOperand !== null && this.operator) {
      switch (this.operator) {
        case '+':
          result = this.firstOperand + secondOperand;
          break;
        case '-':
          result = this.firstOperand - secondOperand;
          break;
        case '*':
          result = this.firstOperand * secondOperand;
          break;
        case '/':
          result = this.firstOperand / secondOperand;
          break;
      }
    }
  
    this.input = result.toString();
    this.firstOperand = result;
    this.operator = null;
  }
  
  
  
}