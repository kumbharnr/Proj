import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { Users } from 'src/app/users';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service:OrderDetailsService, private fb:FormBuilder,private route:Router) { }

  successMsg:any;
  errorMsg:any
  userss:any
  submitted = false;
  
  ngOnInit(): void {
  }
  registerForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    pass:['',[Validators.required,Validators.minLength(4)]],
    mobile:['',[Validators.required,Validators.minLength(10)]]
  })
  

  // registerForm = new FormGroup({
  //   email:new FormControl('',[Validators.required,Validators.email]),
  //   pass:new FormControl('',[Validators.required,Validators.minLength(4)]),
  //   mobile:new FormControl('',[Validators.required,Validators.minLength(10)])

  // });
  
  get f() 
  { return this.registerForm.controls; }
  onSubmit(){
    this.submitted = true;
     if(this.registerForm.valid) {
    this.service.postData(this.registerForm.value).subscribe((data)=>{
      console.log("success",data);
      this.successMsg="Registration successfull"
      this.registerForm.reset();
      this.route.navigate(['/login'])
      
    },(err)=>{
      console.log(err);
      this.errorMsg="registration failed"
      
    })
  }else{
    console.log("something wrong");
    this.errorMsg="All field required"
    // alert("All fields required")
  }
  }
  

}
