
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  title: string = "Shopping Card";
  users: User[] = [];

  constructor(private usersService: UsersService, private productsService:ProductsService) { }

  ngOnInit(): void {
  }

}
