import { Component, OnInit } from '@angular/core';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color:String ="black";
  constructor() { }

  ngOnInit(): void {
  }
  public changeColor(color: String){
    this.color = color;
  }

}
