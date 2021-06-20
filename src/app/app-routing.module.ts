import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegFormComponent } from './reg-form/reg-form.component';
import { TodoPageComponent } from './todo-page/todo-page.component';


const appRoutes: Routes = [
  {path: 'RegForm', component: RegFormComponent},
  {path: 'TodoList', component: TodoPageComponent},
  {path: '', redirectTo: "/RegForm", pathMatch: 'full'},

]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
