import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  userStatus;
  constructor(private authService: AuthService){}
  ngOnInit(): void{
    this.authService.cast.subscribe(status=>{
      this.userStatus = status;
    })
  }
  isLoggedIn = this.authService.isLoggedIn();
  getStatus(){
    return this.userStatus;
  }
  signout(){
    alert('signing out');
  }
  logout(){
    this.authService.login
  }
  }
