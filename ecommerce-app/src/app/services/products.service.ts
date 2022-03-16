import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseURL = environment.serviceUrl + 'products';


  constructor(private http: HttpClient) { }

  public findAll(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseURL);
  }

  public findById(id:number): Observable<Product>{
    return this.http.get<Product>(`${this.baseURL}/${id}`)
  }

  public create(product:Product): Observable<Product>{
    return this.http.post<Product>(`${this.baseURL}`, product);
  }

  public update(product:Product): Observable<Product>{
    return this.http.post<Product>(`${this.baseURL}/${product.id}`, product);
  }

  public deleteById(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseURL}/${id}`)
  }
}
