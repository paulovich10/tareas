import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() tareas: any[];

  constructor() { }

  ngOnInit() {

  }

  mostrarTareas() {

    let total = "<ul>";
    for (let tarea of this.tareas) {

      total += `<li>${tarea.titulo}</li><li>${tarea.descripcion}</li>`;
    }
    total += "</ul>";
    return total;
  }

}
