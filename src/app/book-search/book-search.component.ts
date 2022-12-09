import { Component } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent { 

  constructor(private api:ApiService){}
  
  title=""
  searchdata:any=[]
  
  readsearch=()=>
  {
    let data:any={"title":this.title}
    console.log(data)

    this.api.searchbook(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.length == 0){
          alert("Invalid book title")
        }else{
          this.searchdata = response;
        }
      }
    )
  }

  deleteBtn=(id:any)=>{
    let data:any={"id":id}
    this.api.deletebook(data).subscribe(
      (generated:any)=>{
        console.log(generated)
        if(generated.status=="success"){
          alert("deleted successfully")
        }else{
          alert("unsuccessful deletion")
        }
      }
      )

  }

}
