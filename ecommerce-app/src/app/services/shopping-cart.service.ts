import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  
  private baseURL = environment.serviceUrl + 'api/shopping';


  constructor(private http:HttpClient) { }
}
