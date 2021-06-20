import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  userRegForm!: FormGroup;

  // private router: Router
  // private http!: HttpClient;

constructor(private router: Router ) {
  
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




  onSubmit(data: any): void{
   
    
    
    // this.http.post(' http://jsonplaceholder.typicode.com/posts', data)
    // .subscribe(
    //   (response) => console.log(response),
    //   (error) => console.log(error)
    // )

    this.router.navigateByUrl('/TodoList');
  }
  // getData(){
  //       fetch(' http://jsonplaceholder.typicode.com/posts')
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });

  // }

}
