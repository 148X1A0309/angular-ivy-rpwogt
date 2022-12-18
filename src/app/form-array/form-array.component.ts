import { Component, OnInit } from '@angular/core';
import {FormGroup,FormArray, FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  login=new FormGroup ({
    Logindata:new FormArray([
      new FormControl(null,Validators.required)
    ])

  })
  constructor() { }

  ngOnInit() {
  }

  Add(){
    let mobileNums=this.login.get('Logindata') as FormArray

    mobileNums.push(new FormControl(null,Validators.required))
  }
  
  delete(i:number){
    let mobileNums=this.login.get('Logindata') as FormArray

    mobileNums.removeAt(i)
    console.log(mobileNums);
  }

}