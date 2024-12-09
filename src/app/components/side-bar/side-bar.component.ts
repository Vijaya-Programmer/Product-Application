import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  categories = [
    { name: 'Electronics', route: '/electronics' },
    { name: 'Clothing', route: '/clothing' },  
    { name: 'Books', route: '/books' },
    { name: 'Toys', route: '/toys' }    
  ];
}
