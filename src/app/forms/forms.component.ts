import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  login = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(5)]),
    password: new FormControl('',[Validators.required]),
  });

  submit() {
    console.log(this.login.controls['name']);
  }
}
