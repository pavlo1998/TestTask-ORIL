import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  userRegForm!: FormGroup;

constructor() {
  
}

  ngOnInit(): void {

    this.userRegForm = new FormGroup({
      name: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9\-\+]{9,15}$')]),
      
      address: new FormGroup({
        street: new FormControl(''),
        suite: new FormControl(''),
        city: new FormControl(''),
        zipcode: new FormControl('')
      })
    })
  }




  onSubmit(): void{
    console.log(this.userRegForm.get('email')?.value)
  }


}
