import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  viewbook=()=>
  {
    return this.http.get("http://localhost:8080/viewbook")
  }
  addbook=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/addbook",dataToSend)
  }
  searchbook=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/searchbook",dataToSend)
  }
  deletebook=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/deletebook",dataToSend)
  }
  viewuser=()=>
  {
    return this.http.get("http://localhost:8080/viewuser")
  }
  adduser=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/adduser",dataToSend)
  }
}
