import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/Todo';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  constructor(private todoServiceService: TodoServiceService) { }

  taskList: Todo[] = [];

  idForDelete!: number;
  
  tempObj: any;

  deleteContent!: string;

  contentForEdit!: string;

  hidden!: boolean;
  hiddenDelMod!: boolean;

  hiddenEditMod!: boolean;

  ngOnInit(): void {
    this.taskList = this.todoServiceService.getTodoList()
  }

  addModal(){
   this.hidden = this.todoServiceService.openAddModal()
    console.log(this.hidden) 
  }

  setDataAddModal(data: any){
      console.log(data)
      this.hidden = data;
  }

  openRemoveModal(id: number){
   this.hiddenDelMod = this.todoServiceService.openDeleteModal(id)
   this.idForDelete = id;
   
  }

  setDataDeleteModal(data: any){
    this.hiddenDelMod = data
  }

  openEditModal(content: string){
    this.hiddenEditMod = this.todoServiceService.openEditModal(content);
    this.contentForEdit = content

    let index = this.taskList.findIndex(todo => todo.content == content);
    this.tempObj = this.taskList[index]
  }

  setDataEditModal(data:any){
    this.tempObj.content = data;
    this.hiddenEditMod = this.todoServiceService.openEditModal(data);
  }
  dataForClose(data: any){
    this.hiddenDelMod = data
   
  }

}
