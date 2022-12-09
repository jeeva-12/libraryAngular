import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {

  image=""
  title=""
  author=""
  language=""
  releasedyear=""
  description=""
  distributer=""
  publisher=""
  price=""
constructor(private api:ApiService){}
  readValue=()=>
  {
    let data:any=
    {
      "image":this.image,
      "name":this.title,
      "author":this.author,
      "Language":this.language,
      "price":this.price,
      "descrption":this.description,
      "distr":this.distributer,
      "publi":this.publisher,
      "relyear":this.releasedyear

    }

    console.log(data)
    this.api.addbook(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success"){
          this.title=""
          this.image=""
          this.author=""
          this.description=""
          this.publisher=""
          this.language=""
          this.distributer=""
          this.releasedyear=""
          this.price=""
        } else{
          alert("something went wrong")

        }
        
      }
    )
  }


  }



