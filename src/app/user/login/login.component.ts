import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email;
  password;
  token;
  user = null;
  isLoggedIn = this.authService.isLoggedIn();
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    if(this.isLoggedIn)
    this.user = this.authService.currentUser['user'];
  }
  processLogin(data){
    this.authService.setUser(data);
  }
  login(){
  let postData = {email: this.email, password: this.password};
  this.authService.login(postData).subscribe(res=>{
    if(res.hasOwnProperty('user')){
        this.authService.setUser(res);
        this.router.navigate(['user']);
        console.log(res);
      }
      }
    );
  }
}
