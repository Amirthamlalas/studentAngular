import { Component } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {

  name=""
  rollno=""
  addmno=""
  mob=""
  college=""
  parent=""
  parentphn=""
  username=""
  password=""

  entry=()=>{
    let data:any={
      "name":this.name,
      "rollno":this.rollno,
      "addmno":this.addmno,
      "mob":this.mob,
      "college":this.college,
      "parent":this.parent,
      "parentphn":this.parentphn,
      "username":this.username,
      "password":this.password
    
    }
    console.log(data)
  }



}
