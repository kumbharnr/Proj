import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !:FormGroup;
  submitted = false;
  // loggedin = false;

  constructor(private fb:FormBuilder,
    private http:HttpClient,
    private router:Router,
    private service:OrderDetailsService) { }
    loggedin = false;
  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      pass:['',Validators.required]
    })
  }
  get f() 
  { return this.loginForm.controls; }

  url="http://localhost:3000/Users"

  login(){

    this.submitted = true
    if(this.loginForm.valid){
      this.loggedin = true;
      this.http.get<any>(this.url).subscribe((data)=>{
        const users = data.find((a:any)=>{
          return a.email === this.loginForm.value.email && a.pass===this.loginForm.value.pass
        });
        if(users){
          localStorage.setItem('email',this.loginForm.value['email'])
          localStorage.setItem('pass',this.loginForm.value['pass'])
          
          alert("login success")
          this.router.navigate([''])
          
        }else{
          alert("Invalid crediantials")
        }
      })
    }
  }

}
