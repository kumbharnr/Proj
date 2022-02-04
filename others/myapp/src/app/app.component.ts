import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  UserData:any = {};
  list:any[]=[];

  getData(data:NgForm){
    console.log(data);
    this.UserData=data;

  }
  addTask(item:any){
      this.list.push({id:this.list.length,name:item});
      console.log(this.list);
      
  }

  removeItem(id:any){
    this.list = this.list.filter(item=>item.id!==id)
    // this.list.pop()
    console.log(id);
    
  }

  userLogin(items:any){
    console.log(items);
    
  }
  loginForms = new FormGroup({
    userss :new FormControl('',[Validators.required,Validators.email]),
    passwords : new FormControl('',[Validators.required])
  })
  userLogins(){
    console.log(this.loginForms.value);
    
  }
  get userss(){
    return this.loginForms.get('userss')
  }

  get passwords(){
    return this.loginForms.get('passwords');
    
  }
}
