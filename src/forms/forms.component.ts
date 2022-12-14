import { Component, OnInit} from '@angular/core';
import { FormControl ,FormGroup} from '@angular/forms';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
login=new FormGroup({
  name:new FormControl(),
  password:new FormControl()
})

  constructor() { }

  ngOnInit() {
  }
  Submit(){
console.log(this.login.controls.name);
}
}