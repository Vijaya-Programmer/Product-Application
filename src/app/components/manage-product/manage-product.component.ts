import { Component } from '@angular/core';
import { product } from '../../models/product.models';
import { ProductService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-product.component.html',
  styleUrl: './manage-product.component.css'
})
export class ManageProductComponent {
  products: product[] = [];        
  editingProduct: product | null = null; 

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  // Fetch all products
  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data: product[]) => {
        this.products = data; 
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }

  // Start editing a product
  onEdit(product: product): void {
    this.editingProduct = { ...product }; 
  }

  // Cancel editing
  cancelEdit(): void {
    this.editingProduct = null; }

  // Update the product
  onUpdate(): void {
    if (this.editingProduct) {
      this.productService.updateProduct(this.editingProduct).subscribe({
        next: () => {
          alert('Product updated successfully!');
          this.loadProducts(); 
          this.cancelEdit();   
        },
        error: (error) => {
          console.error('Error updating product:', error);
        }
      });
    }
  }

  // Delete a product
  onDelete(productId: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(productId).subscribe({
        next: () => {
          alert('Product deleted successfully!');
          this.loadProducts(); // Refresh the product list
        },
        error: (error) => {
          console.error('Error deleting product:', error);
        }
      });
    }
  }
}


