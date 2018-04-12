import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent/*  implements OnChange */{

rating:number=5;
starWidth:number;

ngOnChange():void{
	this.starWidth= this.rating * 86/5;
}
onClick():void{
	console.log('this rating $(this.rating)is clicked ')
}

}
