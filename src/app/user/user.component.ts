import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user = null
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    this.user = this.authService.currentUser
  }
}
