import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css'],
})
export class InterpolationComponent implements OnInit {
  name: string = 'special ord';
  d: String = new Date().toLocaleTimeString();
  ishidden: boolean = false;
  isdisabled: boolean = true;
  cvar:string='blue';
  name2:any;
  city='Banglore'
  //To LocalDateString returns the month/date/year
  //To LocalTimeString will gives you the current Time locally
  constructor() {}
  ngOnInit() {}

  timeid = setInterval(() => {
    this.d = new Date().toLocaleTimeString();
  }, 1000);

  changeName(e){
    this.name2=e.target.value
  }
  
  Update(){
  this.city="Hyderabad" ;
  }

}
