import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { product } from '../../models/product.models';
import { ProductService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [RouterModule, CommonModule,FormsModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent  {
  searchTerm: string = ''; 

  constructor(private searchService: SearchService) {}
 
  // Update the search term in the shared service
  onSearchChange(): void {
    this.searchService.setSearchTerm(this.searchTerm);
  }
}



  


