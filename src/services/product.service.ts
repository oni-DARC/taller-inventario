import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from '../app/models/product.model';  

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private firestore: AngularFirestore) {}

  getProducts() {
    return this.firestore.collection('products').snapshotChanges();
  }

  addProduct(product: Product) {
    return this.firestore.collection('products').add(product);
  }
}
