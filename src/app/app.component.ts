import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
   templateUrl: './app.component.html',  
/*   template:"<div><h1>{{title}}</h1><div>my first inner template</div></div>"  */
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Application Management';
}
