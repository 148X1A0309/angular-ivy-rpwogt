import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  states = [
    {
        'id':1,
        'state':'Andhra-Pradesh',
        'code':'AP'
    },
    {
        'id':2,
        'state':'Telangana',
        'code':'TS'
    },
    {
        'id':3,
        'state':'Punjab',
        'code':'PJ'
    },
    {
        'id':4,
        'state':'UttarPradesh',
        'code':'UP'
    },
    {
        'id':5,
        'state':'MadhyPradesh',
        'code':'MP'
    }
  
  ]
  
  
  districts=[
    {
        'id':1,
        'district':'Guntur',
        's_id':1
    },
    {
        'id':2,
        'district':'Warangal',
        's_id':2
    },
    {
        'id':3,
        'district':'Amristar',
        's_id':3
    },
    {
        'id':4,
        'district':'Lucknow',
        's_id':4
    },
    {
        'id':5,
        'state':'Bhopal',
        's_id':'5'
    }
  
  ]
  
  constructor() { }

  ngOnInit() {
  }


}