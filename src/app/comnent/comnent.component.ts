import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comnent',
  templateUrl: './comnent.component.html',
  styleUrls: ['./comnent.component.css']
})
export class ComnentComponent implements OnInit {
fcmp:string ='i am in compnent  component';
  constructor() { }

  ngOnInit() {
  }

}
