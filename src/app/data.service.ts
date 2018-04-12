import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
	getProducts():IProduct[]{
		return[{
	
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
	
}
		
		
		
		
		
		]
	}

  constructor() { }

}
