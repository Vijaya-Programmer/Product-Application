import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { product } from '../../models/product.models';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit {

 products: product[]=[]; 
 paginatedProducts: product[] = []; 
 currentPage: number = 1; 
 pageSize: number = 5; 
 totalPages: number = 1; 

  constructor(public producService: ProductService) {}

  ngOnInit(): void {
    this.getProducts(); 
   
  }

  // Fetch all products from the service
  getProducts(): void {
    this.producService.getProducts().subscribe({
      next: (data: product[]) => {
        this.products= data;    
        this.updatePagination(); 
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
    
  }
 updatePagination(): void {
  this.totalPages = Math.ceil(this.products.length / this.pageSize); 
  const startIndex = (this.currentPage - 1) * this.pageSize;
  const endIndex = startIndex + this.pageSize;
  this.paginatedProducts = this.products.slice(startIndex, endIndex); 
}

// Change the current page
changePage(page: number): void {
  if (page > 0 && page <= this.totalPages) {
    this.currentPage = page;
    this.updatePagination();
  }
}


}
