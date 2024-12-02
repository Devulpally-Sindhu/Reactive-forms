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

  // studentForm:any;
  student1:any[]=[];

  constructor(){}
  ngOnInit(){
   
  }

  onCheck(e:any){
    if(e.target.checked){
      this.student1.push(e.target.value)
    }
    else{
      this.student1=this.student1.filter((x)=>{
        if(e.target.value!==x){
          return true
        }
        else{
          return false
        }
      })
    }
    
   
  }
  

  
  
  }
