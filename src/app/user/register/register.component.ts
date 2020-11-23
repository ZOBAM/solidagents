import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;
  selectedDP: File;
  dpPreviewURL = "./assets/images/dp_placeholder.png";
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      first_name: [
        'Don',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25)
        ]
      ],
      last_name: [
        'Zoby',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25)
        ]
      ],
      tel: [
        '07067137110',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(14)
        ]
      ],
      email:[
        'upc4you@gmail.com',
        [
          Validators.email,
          Validators.required
        ]
      ],
      password: [
        'adgjmp12',
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ]
    })
    this.myForm.valueChanges.subscribe(val=>{
      console.log(val);
    })
  }//end ng OnInit
  get first_name(){
    return this.myForm.get('first_name')
  }
  get last_name(){
    return this.myForm.get('last_name')
  }
  get tel(){
    return this.myForm.get('tel')
  }
  get email(){
    return this.myForm.get('email')
  }
  get password(){
    return this.myForm.get('password')
  }
  onSelectDP(event){
    this.selectedDP = event.target.files[0]
    var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e:any)=>{
        this.dpPreviewURL = e.target.result;
      }
  }
  register(){
    let regDetail = new FormData()
    for(let v in this.myForm.value){
      regDetail.append(v, this.myForm.value[v])
    }
    regDetail.append('dp', this.selectedDP)
    this.authService.registerUser(regDetail).subscribe(res=>{
      console.log(res);
    });
    console.log(this.myForm.value);
    console.log('Registering new User');
  }
}
