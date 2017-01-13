import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  wins = 0;
  losses = 0;

	private winningNumber = Math.floor((Math.random() * 100) + 1);

	@Input() score:number;

  constructor() { 
  	
  }

  ngOnInit() {
    this.wins = 0;
    this.losses = 0;
  }

}
