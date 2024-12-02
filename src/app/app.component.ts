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
      gender:[''],
      techs:this.fb.array([''])
    })  
  }

  add(){
    console.log(this.studentForm.value)

  }

  get techs(){
    return this.studentForm.get('techs') as FormArray
  }

  updateTechs(e:any){
    // if(e.target.checked){
    //   this.techs.push(e.target.value)
    // }
    // else{
    //   this.techs=this.techs.filter((x:any)=>{
    //     if(e.target.value!==x){
    //       return true
    //     }
    //     else{
    //       return false;
    //     }
    //   })
    // }
    this.techs.push(this.fb.control)

  }

  
  

  
  
  }
