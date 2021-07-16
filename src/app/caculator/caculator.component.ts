import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {

  public number1 : number =0;
  public number2 : number =0;
  public list : Array<String> = ["+", "-", "*","/"];
  constructor() { }

  ngOnInit(): void {
  }

  kq:number=0;
   getEquals(operator:String)  {
      
      switch(operator){
        case "+": 
        this.kq= this.number1+this.number2;
           break;
        case "-": this.kq=  this.number1-this.number2;break;
        case "*": this.kq=  this.number1*this.number2; break;
        case "/": this.kq=  this.number1/this.number2;break;
      }
      
  }

  getEquals2(operator:String):number{
    let kq2:number =0;
    switch(operator){
      case "+": 
      kq2= this.number1+this.number2;
         break;
      case "-": kq2=  this.number1-this.number2;break;
      case "*": kq2=  this.number1*this.number2; break;
      case "/": kq2=  this.number1/this.number2;break;
    }
    return kq2;
  }

}
