import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-form-remove-to-do',
  templateUrl: './form-remove-to-do.component.html',
  styleUrls: ['./form-remove-to-do.component.css']
})
export class FormRemoveToDoComponent implements OnInit {

  constructor(private todoServiceService: TodoServiceService) { }

  @Input()
  hiddenDelMod!: boolean;

  @Input() idForDelete!: number;

  taskList: any;

  @Output() deleteModalData: EventEmitter<any> = new EventEmitter()

  ngOnInit(): void {
    this.taskList = this.todoServiceService.getTodoList()
  }

  removeTodoItem(){
    this.todoServiceService.deleteTodo(this.idForDelete)
    this.hiddenDelMod = this.todoServiceService.openDeleteModal(this.idForDelete)
    console.log(this.idForDelete)
    console.log(this.taskList)
    this.deleteModalData.emit(this.hiddenDelMod)
  }

  closeModal(){
    this.hiddenDelMod = this.todoServiceService.openDeleteModal(this.idForDelete);
    this.deleteModalData.emit(this.hiddenDelMod)
  }

}
