import { Component } from '@angular/core';

@Component({
  selector: 'app-user-registrartion',
  templateUrl: './user-registrartion.component.html',
  styleUrls: ['./user-registrartion.component.css']
})
export class UserRegistrartionComponent {

  name=""
  adhar=""
  address=""
  pin=""
  dob=""
  email=""
  mobile=""
  username=""
  password=""
  conpassword=""

  regist=()=>
  {
    let data:any=
    {
      name:this.name,
  adhar:this.adhar,
  address:this.address,
  pin:this.pin,
  dob:this.dob,
  email:this.email,
  mobile:this.mobile,
  username:this.username,
  password:this.password,
  conpassword:this.conpassword
    }
    console.log(data)
  }



}
