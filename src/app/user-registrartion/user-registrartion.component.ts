import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-registrartion',
  templateUrl: './user-registrartion.component.html',
  styleUrls: ['./user-registrartion.component.css']
})
export class UserRegistrartionComponent {

  name=""
  address=""
  pincode=""
  aadharnumber=""
  dob=""
  email=""
  phonenumber=""
  username=""
  password=""
  confirmpassword=""

  constructor(private api:ApiService){}
                    
userRegister=()=>
{
  let data:any={
    
    "name":this.name,
    "address":this.address,
    "pincode":this.pincode,   
    "aadharnumber":this.aadharnumber,
    "dob":this.dob,
    "email":this.email,
    "phonenumber":this.phonenumber,
    "username":this.username,   
    "password":this.password,
    "confirmpassword":this.confirmpassword

  }

  console.log(data)

  this.api.adduser(data).subscribe(
    (response:any)=>{
      console.log(response)
      if (response.status=="success"){
        this.name=""
        this.address=""
        this.pincode=""
        this.aadharnumber=""
        this.dob=""
        this.email=""
        this.phonenumber=""
        this.username=""
        this.password=""
        this.confirmpassword=""
      } else{
        alert("something went wrong")

      }
      
    }
  )
}



}
