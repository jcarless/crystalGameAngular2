import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

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

  // @Input() score:number;

  initialScore = 0;


  @Output() score = new EventEmitter<number>();


  onClicked(value) {
    this.initialScore += value;
    alert("score: " + this.initialScore);
    this.score.emit(this.initialScore);

  }



  constructor() { 
  	console.log("red value: " + this.redValue);
  	console.log("blue value: " + this.blueValue);
  	console.log("yellow value: " + this.yellowValue);
  	console.log("green value: " + this.greenValue);

  }

  ngOnInit() {
  }

}
