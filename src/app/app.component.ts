import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  arrTareas: any[];

  constructor() {

    this.arrTareas = [];

  }

  ontareaEnviada($event) {
    this.arrTareas.push({ ...$event });
    console.log(this.arrTareas);

  }


}



