import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { product } from '../../models/product.models';
import { ProductService } from '../../services/products.service';
import { catchError, EMPTY, of, tap } from 'rxjs';

@Component({
  selector: 'app-add-product',
  standalone: true, 
  imports: [FormsModule, CommonModule], 
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product: product = {  
    id: 0,
    name: '',
    type: '',
    price: 0,
    description: '',
    pictureUrl: '' 
  };

  errorMessage = '';
  
  @Output() productAdded = new EventEmitter<any>(); 

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.product.name && this.product.type && this.product.price && this.product.description && this.product.pictureUrl) {
      this.productService.addProduct(this.product)
        .pipe(
          tap(newProduct => {
            console.log('Product successfully added:', newProduct);
            this.productAdded.emit(newProduct);
            this.resetForm();
          }),
          catchError(error => {
            this.errorMessage = 'Failed to add product.';
            console.error('Error adding product:', error);
            return of(null);
          })
        ).subscribe();
    } else {
      console.log('Please fill in all the fields.');
      this.errorMessage = 'Please fill in all the fields.';
    }
  }

  // Reset the form data
  resetForm() {
    this.product = {  
    id: 0,   
      name: '',
      type: '',
      price: 0,
      description: '',
      pictureUrl: '' // Reset URL field as well
    };
  }
}
