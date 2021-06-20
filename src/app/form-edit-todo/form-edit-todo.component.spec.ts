import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditTodoComponent } from './form-edit-todo.component';

describe('FormEditTodoComponent', () => {
  let component: FormEditTodoComponent;
  let fixture: ComponentFixture<FormEditTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
