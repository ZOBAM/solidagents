import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  cast = this.loggedIn.asObservable();
  registerURL = 'http://www.api.solidagents.net/api/register';
  loginURL = 'http://www.api.solidagents.net/api/login';
  currentUser;
  currentUserToken;
 constructor(private http: HttpClient){}
  public isLoggedIn() {
    let currentUser = localStorage.getItem('userData');
    if(currentUser && JSON.parse(currentUser)){
      this.currentUser = JSON.parse(currentUser);
      return true;
    }
    else{
      return false;
    }
  }
  setLoggedIn(status){
    this.loggedIn.next(status)
  }
  setUser(user){
    localStorage.setItem('userData', JSON.stringify(user));
    this.currentUser = user.user
    this.currentUserToken = user.access_token
    this.loggedIn.next(true)
    //this.isLoggedIn = true;
    console.log(this.isLoggedIn)
  }
  registerUser(formData){
    return this.http.post(this.registerURL, formData);
  }
  login(credentials){
    return this.http.post(this.loginURL, credentials);
  }
  logout(){
    this.loggedIn.next(false);
    localStorage.removeItem('userData');
  }
  getLoggedIn(){
    let newState;
    this.loggedIn.subscribe(status =>{
      newState = status
    });
    return newState
  }
}
