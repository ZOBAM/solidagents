import { Input } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
@Input() status;
@Output() public sidenavToggle = new EventEmitter();
@Output() signout = new EventEmitter();
user = null
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
  getUser(){
    return this.authService.currentUser
  }
}
