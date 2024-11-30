import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Reactive-forms';
  studentForm=new FormGroup({
    firstname:new FormControl(),
    lastname:new FormControl(),
    mobilenumbers:new FormArray([new FormControl()]),
    locations:new FormArray([new FormControl()])
  })

  addStudent(){
    console.log(this.studentForm.value)
  }

  get mobilenumbers(){
    return this.studentForm.get('mobilenumbers') as FormArray
  }

  get locations(){
    return this.studentForm.get('locations') as FormArray
  }

  addNew(){
    this.mobilenumbers.push(new FormControl())
  }

  addLocation(){
    this.locations.push(new FormControl())
  }
}
