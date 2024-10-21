import { Component } from '@angular/core';
import { Product } from '../../models/product.model'; // Asegúrate de que Product está importado correctamente
import { ProductService } from '../../../services/product.service'; 

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product: Product = {  // Inicializa el objeto product
    name: '',
    price: 0,
    quantity:0
  };

  constructor(private productService: ProductService) {}

  addProduct() {
    if (this.product.name && this.product.price > 0) {
      this.productService.addProduct(this.product).then(() => {
        console.log('Product added successfully');
        // Resetea el producto después de agregarlo si es necesario
        this.product = { name: '', price: 0 };
      }).catch((error) => {
        console.log('Error adding product:', error);
      });
    } else {
      console.log('Invalid product details');
    }
  }
}
