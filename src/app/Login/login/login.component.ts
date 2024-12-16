import { Component } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  userData:User={
    email:'',
    password:''
  }
  constructor(private userService:UserService,private fb:FormBuilder,private router:Router)
  {
    this.form=this.fb.group({
      Email: ['',[]]
    })
  }
}
