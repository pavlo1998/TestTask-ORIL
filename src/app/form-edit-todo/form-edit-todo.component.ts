import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-form-edit-todo',
  templateUrl: './form-edit-todo.component.html',
  styleUrls: ['./form-edit-todo.component.css']
})
export class FormEditTodoComponent implements OnInit {

  constructor(private todoServiceService: TodoServiceService) { }

  @Input() hiddenEditMod!: boolean;
  @Input() contentForEdit!: string;

  taskList: any;

  

  ngOnInit(): void {
      this.taskList = this.todoServiceService.getTodoList()
  }

  @Output() deleteModalData: EventEmitter<any> = new EventEmitter()
  @Output() hideModal: EventEmitter<any> = new EventEmitter()

  saveChanges(){

    this.deleteModalData.emit(this.contentForEdit);
    console.log(this.contentForEdit);
    
  }

  closeEditMod(){
    
    this.hiddenEditMod = !this.hiddenEditMod
    this.hideModal.emit(this.hiddenEditMod);
    console.log(this.hiddenEditMod)
  }
  

}
