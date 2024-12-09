import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product} from '../models/product.models';


@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private baseUrl = 'http://localhost:5000/api/Product'; 
 
  constructor(private http: HttpClient) {} 

    // Get all products
    getProducts(): Observable<product[]> {
      return this.http.get<product[]>(`${this.baseUrl}`);
    }
  
    // Get product by ID
    getProductByType(type: string): Observable<product[]> {
      return this.http.get<product[]>(`${this.baseUrl}/${type}`);
    }
  
    // Add a new product
    addProduct(product: product): Observable<product> {
      return this.http.post<product>(`${this.baseUrl}`, product);
    }
  
    // Update a product
  updateProduct(product: product): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${product.id}`, product);
  }

  // Delete a product
  deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${productId}`);
  }

}
