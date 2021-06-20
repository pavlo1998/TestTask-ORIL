import { Injectable } from '@angular/core';
import { Todo } from './model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {


  hidden = false;

  hiddenDelMod = false;
  
  hiddenEditMod = false;

  contentForEdit!: string;

  counter = 0

  
  
  getId(){
    return this.counter++
  }

  idForDelete!: number;

  taskList: Todo[] = [
    {
      content: 'Do homework',
      completed: false,
      id: this.getId()
    }
  ]

  disableButt!: boolean;

  constructor() { }

  openAddModal(){
    
     return this.hidden = !this.hidden;
  }

  closeAddModal(){
    return this.hidden = !this.hidden;
  }


  getTodoList(){
    console.log(this.taskList)
    return this.taskList
  }


  addNewTodo(user: any){
    return this.taskList.unshift(user)
    
  }

  openDeleteModal(id:number){
    this.idForDelete = id;
    return this.hiddenDelMod = !this.hiddenDelMod;
  }


  deleteTodo(id: number){
    let index = this.taskList.findIndex(todo => todo.id == id);
    this.taskList.splice(index, 1)
  }
  

  openEditModal(content:string){
    this.contentForEdit = content;
    return this.hiddenEditMod = !this.hiddenEditMod;
  }

}
