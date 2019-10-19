import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tarea: any;
  @Output() tareaEnviada: EventEmitter<any>;

  constructor() {

    this.tarea = {};
    this.tareaEnviada = new EventEmitter();


  }

  ngOnInit() {
  }

  ontareaEnviada() {

    this.tareaEnviada.emit(this.tarea);
    this.tarea = {};//vacio el input al darle a enviar


  }


}
