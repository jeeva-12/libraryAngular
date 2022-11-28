import { Component } from '@angular/core';

@Component({
  selector: 'app-administator-login',
  templateUrl: './administator-login.component.html',
  styleUrls: ['./administator-login.component.css']
})
export class AdministatorLoginComponent {

  name=""
  password=""

  adminLogin=()=>
  {
    
   let data:any=
   {
    name:this.name,
    password:this.password
   }
   console.log(data)
  }

  


}
