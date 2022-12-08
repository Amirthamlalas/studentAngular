import { Component } from '@angular/core';

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
 

  entry=()=>{
    let data:any={
      "name":this.name,
      "rollno":this.rollno,
      "addmno":this.admno,
      
      "college":this.college,
     
    
    }
    console.log(data)
  }



}
