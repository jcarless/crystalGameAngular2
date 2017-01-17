import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(){}

	@Input() count:number = 0;


	handleScore(score: number) {
		console.log(score);

		this.count = score

  }


}
