import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BooleanLiteral } from 'typescript';
import { Todo } from '../model/Todo';

import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-from-creat-todo',
  templateUrl: './from-creat-todo.component.html',
  styleUrls: ['./from-creat-todo.component.css']
})
export class FromCreatTodoComponent implements OnInit {

  constructor(private todoServiceService: TodoServiceService) { }

  @Input() hidden!: boolean;


  @Input() taskList: Todo[] = [];

  content!: string;
  completed!: boolean;
 
  

  ngOnInit(): void {
    this.taskList = this.todoServiceService.getTodoList()
  }

  @Output() addModalData: EventEmitter<any> = new EventEmitter();

  close(){
    this.hidden = this.todoServiceService.closeAddModal()
    this.addModalData.emit(this.hidden)
    this.content = '';
  }

  addNew(){
    
      this.hidden = this.todoServiceService.closeAddModal()
      this.addModalData.emit(this.hidden)
      this.todoServiceService.addNewTodo({
        content: this.content,
        completed: false,
        id: this.todoServiceService.getId()
      })
      this.content = '';
  
    
    
  }

}
