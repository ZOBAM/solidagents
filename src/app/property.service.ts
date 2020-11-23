import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  postURL = 'http://www.api.solidagents.net/api/properties';
  constructor(private http: HttpClient) { }
  postProperty(propertyForm){
    console.log('about to log received form data')
    console.log(propertyForm)
    return this.http.post(this.postURL, propertyForm);
  }
  getProperties(){
    return this.http.get(this.postURL);
  }
  getUsers(){
    return this.http.get('http://www.api.solidagents.net/api/users')
  }
}
