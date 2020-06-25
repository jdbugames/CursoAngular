import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './../../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://platzi-store.herokuapp.com/products/');
  }

  getProduct(id: string) {
    return this.http.get(`https://platzi-store.herokuapp.com/products/${id}`);
  }
}
