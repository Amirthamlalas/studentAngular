import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {

  name=""
  rollno=""
  admno=""
 
  college=""
 constructor(private api:ApiService){}

  entry=()=>{
    let data:any={
      "name":this.name,
      "rollno":this.rollno,
      "admno":this.admno,
      
      "college":this.college,
     
    
    }
    console.log(data)

    this.api.addStudent(data).subscribe(
      (response:any)=>{
        if (response.status=="success") {
          alert("student added successfully")
          
        } else {
          alert("something went wrong")
          
        }
      }
    )
  }



}
