import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  
  show=false;

  constructor() { }

  ngOnInit() {
  }

  Change(){
    this.show=true;
  }
  closepopup(){
    this.show=false;
  }
  closepop(e:any){
    if(e.target.classList.contains('appear')){
      this.show=false;
    }
  }

}