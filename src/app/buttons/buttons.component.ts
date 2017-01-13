import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {



	redValue = Math.floor((Math.random() * 10) + 1);

	blueValue = Math.floor((Math.random() * 10) + 1);

	yellowValue = Math.floor((Math.random() * 10) + 1);

	greenValue = Math.floor((Math.random() * 10) + 1);

  onClicked(value) {
    this.score += value;
    alert("score: " + this.score);
  }

	@Output() score = new EventEmitter<number>();

  constructor() { 
  	console.log("red value: " + this.redValue);
  	console.log("blue value: " + this.blueValue);
  	console.log("yellow value: " + this.yellowValue);
  	console.log("green value: " + this.greenValue);
  	console.log("score: " + this.score);

  }

  ngOnInit() {
  }

}
