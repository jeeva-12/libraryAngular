import { Component } from '@angular/core';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {

  image=""
  name=""
  author=""
  Language=""
  Price=""
  descrption=""
  distr=""
  publi=""
  relyear=""

  readValue=()=>
  {
    let data:any=
    {
      "image":this.image,
      "name":this.name,
      "author":this.author,
      "Language":this.Language,
      "Price":this.Price,
      "descrption":this.descrption,
      "distr":this.distr,
      "publi":this.publi,
      "relyear":this.relyear

    }

    console.log(data)

  }


}
