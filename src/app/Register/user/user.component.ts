import { Component } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  form: FormGroup;
  isRegistered:boolean=false;
  heading = "Register User";
  constructor(private registeruser:UserService, private fb:FormBuilder){
    this.form = this.fb.group({
      UserId : ['',[Validators.required, Validators.minLength(4)]],
      UserName : ['',[Validators.required, Validators.minLength(5)]],
      Password : ['',[Validators.required, Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).+$/
)]],
      Email : ['',[Validators.required, Validators.email]],
      PhoneNo : ['',[Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
  }
  get formControls(){
    return this.form.controls;
  }
  
  userdetails:User={
    userId:'',
    userName:'',
    password:'',
    email:'',
    phoneno:0
  }

  addUser(){
    if(this.form.invalid){
      return;
    }
    this.isRegistered=true;
    setTimeout(()=>{
      this.isRegistered=false;
    },5000)
    this.userdetails.userId = this.form.value.UserId;
    this.userdetails.userName = this.form.value.UserName;
    this.userdetails.password = this.form.value.Password;
    this.userdetails.email = this.form.value.Email;
    this.userdetails.phoneno = this.form.value.PhoneNo;



    this.registeruser.addUser(this.userdetails).subscribe({
      next:(response)=>{
        alert('User Registered')
        console.log(response)
        
      },
        error:(err)=>{
          console.log('error',err);
      }

      // next:(response)=>{
      //   alert('Product added')
      // },
      // error:(err)=>{
      //   alert(err);
      // }
    })
  }
}
