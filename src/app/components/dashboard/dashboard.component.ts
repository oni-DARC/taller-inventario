import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';  
import { CartService } from '../../../services/cart.service';  
import { Product } from '../../models/product.model';  

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data.map((e) => {
        const productData = e.payload.doc.data() as Product;
        productData.id = e.payload.doc.id;
        return productData;
      });
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
