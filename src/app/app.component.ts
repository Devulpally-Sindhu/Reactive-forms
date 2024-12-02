import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Reactive-forms';

  studentForm:any;

  constructor(public fb:FormBuilder){}
  ngOnInit(){
    this.studentForm=this.fb.group({
      firstname:[''],
      lastname:[''],
      mobilenumbers:this.fb.array([[]])
    })
  }

  get mobilenumbers(){
    return this.studentForm.get('mobilenumbers') as FormArray
  }

  add(){
    console.log(this.studentForm.value)
  }

  addNew(){
    this.mobilenumbers.push(this.fb.control(''))

  }
  
  }
