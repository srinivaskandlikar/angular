import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ComnentComponent } from './comnent/comnent.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { StarComponent } from './star/star.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    ComnentComponent,
    ProductsComponent,
    StarComponent,
  ],
  imports: [
    BrowserModule,
	FormsModule,
	RouterModule.forRoot([
	{	
	path:'Comnent',
    component:ComnentComponent	
	},
	{	
	path:'products',
    component:ProductsComponent	
	}
	
	])
	
  ],
  providers: [DataService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
