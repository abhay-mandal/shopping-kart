import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product, UpdateMode } from "../../types";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];
  @Output() onAddToCart: EventEmitter<Product> = new EventEmitter();
  @Output() onQuantityUpdate: EventEmitter<Product> = new EventEmitter();

  ngOnInit() { }

  addToCart(product: Product) {
    this.onAddToCart.emit(product);
  }

  removeItem(product) {
    product.cartQuantity -= 1;
    this.onQuantityUpdate.emit(product);
  }

  addItem(product) {
    product.cartQuantity += 1;
    this.onQuantityUpdate.emit(product);
  }
}


