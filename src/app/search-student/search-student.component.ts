import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent {

  constructor(private api:ApiService){}
  name=""

  SearchData:any=[]
readValue=()=>{
  let data:any={
    "name":this.name
    
}
console.log(data)
this.api.searchStudent(data).subscribe(
  (response:any)=>{
    this.SearchData=response;
  }
)
}

deleteBtnClick =(id:any)=>
{
  let data:any={"id":id}
  this.api.deleteStudent(data).subscribe(
    (response:any)=>{
      console.log(response)
      if (response.status=="success") {
        alert("Deleted")
        
      } else {
        alert("Something went wrong")
      }
    }
  )
}



}
