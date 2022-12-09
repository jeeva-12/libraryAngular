import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-administator-login',
  templateUrl: './administator-login.component.html',
  styleUrls: ['./administator-login.component.css']
})
export class AdministatorLoginComponent {

  name=""
  password=""

  constructor(private route:Router){}

  adminLogin=()=>
  {
    
   let data:any=
   {
    name:this.name,
    password:this.password
   }
   console.log(data)

if (this.name=="admin" && this.password=="12345") {
    alert("valid")
    this.route.navigate(['/reg'])
  
} else 
{
 alert("invalid") 
}

  }

  


}
