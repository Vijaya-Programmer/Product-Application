import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { ToysComponent } from './components/toys/toys.component';
import { ClothingComponent } from './components/clothing/clothing.component';

import { BooksComponent } from './components/books/books.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { HomeComponent } from './components/home/home.component';
import { ManageProductComponent } from './components/manage-product/manage-product.component';




export const routes: Routes = [
   {path: '', component: MainComponent,
    children:[
                { path: '', component: HomeComponent },
                { path: 'add-product', component: AddProductComponent },
                { path:'electronics', component:ElectronicsComponent},
                { path:'toys', component:ToysComponent},
                { path:'clothing', component:ClothingComponent},               
                { path:'books', component:BooksComponent},
                {path: 'allproducts', component:AllProductsComponent},
                { path: 'manageProduct', component:ManageProductComponent},
                { path: '**', redirectTo: '', pathMatch: 'full' },
    ]
   }  
];


