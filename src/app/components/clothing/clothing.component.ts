import { Component } from '@angular/core';
import { product } from '../../models/product.models';
import { ProductService } from '../../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clothing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clothing.component.html',
  styleUrl: './clothing.component.css'
})
export class ClothingComponent {

  products: product[]=[]; // Store the product list

  constructor(public producService: ProductService) {}

  ngOnInit(): void {
    this.getProductbyBooks("Clothing"); // Fetch products when the component initializes
   
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
