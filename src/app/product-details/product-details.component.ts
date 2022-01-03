import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers:[ProductService]
})
export class ProductDetailsComponent implements OnInit {

  constructor(private productServis: ProductService,
    private activatedRoute:ActivatedRoute) { }

    urun: Product = new Product()

    ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        console.log(params["productId"])
        this.productServis.getProductOne(params["productId"]).subscribe(data => {
          this.urun = data
  
        });
      });
  
    }

}
