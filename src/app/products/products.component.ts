import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',  
  styleUrls: ['./products.component.css']   

})
export class ProductsComponent  implements OnInit {
pageTitle:string='Product List';
imagewidth:number=100;
imagemargin:number=2;
/* abc:string='srinivas'; */
showImage:boolean= false; 
listfilter:string='cart'; 
products:IProduct[] = [{
	
	"productId":1,
	"productName":'srinivas',
	"productcode":'kan 123',
	"releaseDate":"March 01 17",
	"description":"hello srinivas",
	"price":10,
	"starRating":4,
	"imageUrl":"https://images2.alphacoders.com/521/521718.jpg"
	
},
{
	
	"productId":2,
	"productName":'kandlikar',
	"productcode":'kan 456',
	"releaseDate":"january 01 18",
	"description":"hello kandlikar",
	"price":20.12,
	"starRating":5,
	"imageUrl":"https://images2.alphacoders.com/521/521718.jpg"
	
},
{
	
	"productId":3,
	"productName":'viditha',
	"productcode":'kan 001',
	"releaseDate":"may 05 17",
	"description":"hello viditha",
	"price":50,
	"starRating":5,
	"imageUrl":"https://images2.alphacoders.com/521/521718.jpg"
	
}];

toggleImage():void{
	this.showImage= !this.showImage; 
}
   ngOnInit():void{
	  console.log('in onit') 
  } 

}
 