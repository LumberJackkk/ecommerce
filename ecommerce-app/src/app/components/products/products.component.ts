import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  title: string = 'Products List'
  products: Product[] = [];

  constructor(private service:ProductsService) { }

  //Todas nuestras comunicaciones con el backen mediante api rest siempre se deben implementar en este inicializador.
  //Inicializar los datos que queremos mostrar en nuestro component
  ngOnInit(): void {
    this.service.findAll().subscribe(products =>this.products = products)
  }
  delete(product: Product):void {
    if (confirm(`¿Seguro que desea eliminar a ${product.name}?`)) {
      this.service.deleteById(product.id!).subscribe(() => {
        this.products = this.products.filter(a => a != product);
        alert(`Product ${product.name} eliminado con exito`)
      })
    }
  }

}
