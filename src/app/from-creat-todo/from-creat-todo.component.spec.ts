import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromCreatTodoComponent } from './from-creat-todo.component';

describe('FromCreatTodoComponent', () => {
  let component: FromCreatTodoComponent;
  let fixture: ComponentFixture<FromCreatTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromCreatTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromCreatTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
