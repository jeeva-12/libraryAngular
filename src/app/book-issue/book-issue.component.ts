import { Component } from '@angular/core';

@Component({
  selector: 'app-book-issue',
  templateUrl: './book-issue.component.html',
  styleUrls: ['./book-issue.component.css']
})
export class BookIssueComponent {

  name=""
  doissue=""
  membershipno=""
  booktitle=""

  issue=()=>
  {
    let data:any=
    {
      name:this.name,
      doissue:this.doissue,
      membershipno:this.membershipno,
      booktitle:this.booktitle
    }
    console.log(data)
  }

}
