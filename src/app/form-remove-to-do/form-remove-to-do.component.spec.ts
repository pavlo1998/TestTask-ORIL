import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRemoveToDoComponent } from './form-remove-to-do.component';

describe('FormRemoveToDoComponent', () => {
  let component: FormRemoveToDoComponent;
  let fixture: ComponentFixture<FormRemoveToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRemoveToDoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRemoveToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
