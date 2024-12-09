import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { product } from '../../models/product.models';
import { ProductService } from '../../services/products.service';

@Component({
  selector: 'app-electronics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.css'
})
export class ElectronicsComponent {

  products: product[]=[]; // Store the product list

  constructor(public producService: ProductService) {}

  ngOnInit(): void {
    this.getProductbyBooks("Electronics"); // Fetch products when the component initializes
   
  }

// Fetch products by type from the service
getProductbyBooks(type: string): void {
  this.producService.getProductByType(type).subscribe({
    next: (data: product[]) => {
      this.products = data; // Store the fetched products in the 'products' array
    },
    error: (error) => {
      console.error('Error fetching products:', error);
    }
  });
}

}
