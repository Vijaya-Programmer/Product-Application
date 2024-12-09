import { Component, OnInit } from '@angular/core';
import { product } from '../../models/product.models';
import { ProductService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{


  products: product[] = [];          
  filteredProducts: product[] = [];  

  constructor(
    private productService: ProductService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.getAllProducts(); 

   
    this.searchService.searchTerm$.subscribe(searchTerm => {
      this.filterProducts(searchTerm); 
    });
  }

  // Fetch all products from the service
  getAllProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data: product[]) => {
        this.products = data;  
        this.filteredProducts = data; 
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }

  // Filter products based on the search term
  filterProducts(searchTerm: string): void {
    const searchTermLower = searchTerm.toLowerCase();
    this.filteredProducts = this.products.filter(product => 
      product.name.toLowerCase().includes(searchTermLower) 
    );
  }
}


