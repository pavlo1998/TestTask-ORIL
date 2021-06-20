import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FromCreatTodoComponent } from './from-creat-todo/from-creat-todo.component';
import { FormRemoveToDoComponent } from './form-remove-to-do/form-remove-to-do.component';
import { FormEditTodoComponent } from './form-edit-todo/form-edit-todo.component'


@NgModule({
  declarations: [
    AppComponent,
    RegFormComponent,
    TodoPageComponent,
    FromCreatTodoComponent,
    FormRemoveToDoComponent,
    FormEditTodoComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
