import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {

  title: string = "Product Form";
  product: Product = {
    name: '',
    description: '',
    prize: null ,
    quantity: null,
    photo: ''
  }
  error: any;


  constructor(private service:ProductsService, private router:Router,private route:ActivatedRoute) { }


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
  create() {

    this.service.create(this.product).subscribe(product => {
      console.log(product);
      alert(`User creado con exito: ${product.name}`);
      this.router.navigate(['/products'])
    }, err => {
      if (err.status === 400) {
        this.error = err.error;
        console.log(this.error);
      }
    })
  }

  edit() {
    this.service.update(this.product).subscribe(product => {
      console.log(product);
      alert(`User actualizado con con exito: ${product.name}`);
      this.router.navigate(['/users'])
    }, err => {
      if (err.status === 400) {
        this.error = err.error;
        console.log(this.error);
      }
    })
  }

}
