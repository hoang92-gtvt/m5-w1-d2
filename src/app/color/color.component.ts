import { Component, OnInit } from '@angular/core';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color: any ;
  constructor() { }

  ngOnInit(): void {
  }
  public changeColor(color1:any){
    this.color = color1;
    console.log(color1);
  
  }

}
