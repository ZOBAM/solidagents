import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {

  constructor(private http : HttpClient, private propertyService : PropertyService) { }
  properties = null
    /* propertyService.getProperties().subscribe(res=>{
      this.properties = res
    }) */
  ngOnInit(): void {
    this.fetchProperties()
  }
  title = 'Solid Agents';
  name:string = 'Peter';
  students = ['John', 'Kate', 'Uche'];
  formError = false;
  imageURL:string = './assets/images/nwafor_esther.png';
  selectedFile: File = null;
  postData = {email: 'upc4you@gmail.com', password: 'adgjmp12'};
  addStudent = function () {
    if(this.name.length>2){
      this.students.push(this.name);
      this.formError = false;
    }
    else
    this.formError = true;
    this.name = ''
  }
  fetchProperties(){
    this.propertyService.getProperties().subscribe(res=>{
      if(Object.keys(res).length>0)
      this.properties = res
      console.log(res)
    })
    this.propertyService.getUsers().subscribe(res => {
      console.log('User get request testing api security')
      console.log(res)
    })
  }
  getPropertyImg(property){
    return property.property_image[0].link
  }
  checkError = function () {
    if(this.name.length > 2){
      //alert(23);
      this.formError = false;
    }
  }
  hi = function (studentName) {
    alert(studentName)
  }
  uploadImage(event){

    if(event.target.files){
      //alert("Image uploading");
      this.selectedFile = event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e:any)=>{
        this.imageURL = e.target.result;
      }
      const fD = new FormData();
      fD.append('file', this.selectedFile);
      fD.append('name','Donzoby');
      /* const form = event.target;
      const formData = new FormData(form) */
      this.http.post('http://www.api.solidagents.net/api/login', this.postData).subscribe(res=>{
        console.log(res);
      }
      )
    }
  }
}
