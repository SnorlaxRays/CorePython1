import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userId = 'Enter User ID';
  password = '';
  message = '';
  constructor(private router: Router) { }
  signIn(){
    if(this.userId == 'admin' && this.password == 'admin'){
      this.router.navigateByUrl('/welcome');
    }else{
      this.message = 'Invalid login id or password';
    }
  }

  ngOnInit(): void {
  }

}
