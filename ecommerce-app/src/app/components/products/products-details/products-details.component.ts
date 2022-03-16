import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { Product } from '../../../models/product';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  product: Product = {
    name: '',
    description: '',
    prize: null ,
    quantity: null,
    photo: ''
  }

  orderQuantity: number=0;

  constructor(private service:ProductsService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id: number = Number(params.get('id'));
      if (id) {
        this.service.findById(id).subscribe(product => {
          this.product = product;
        })
      }
    })
  }


}
