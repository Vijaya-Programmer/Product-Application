import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { ElectronicsComponent } from '../electronics/electronics.component';
import { ToysComponent } from '../toys/toys.component';
import { ClothingComponent } from '../clothing/clothing.component';
import { BooksComponent } from '../books/books.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/products.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,  
    RouterOutlet,
    TopBarComponent,
    SideBarComponent, 
    ElectronicsComponent,
    ToysComponent,
    ClothingComponent, 
  BooksComponent],  
  providers: [ProductService, HttpClient], 
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
