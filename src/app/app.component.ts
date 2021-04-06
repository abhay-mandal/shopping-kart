import { Component } from '@angular/core';
import { Cart, Product, CartItem } from "../types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: Product[];
  cart: Cart;

  constructor() {
    this.cart = {
      items: []
    } as Cart
  }

  ngOnInit() {
    this.products = [...PRODUCTS].map((product, index) => {
      product.id = index + 1;
      product.image = `/assets/images/items/${product.name.toLocaleLowerCase()}.png`;
      product.cartQuantity = 0;
      return product;
    });
  }

  addToCart(product: Product) {
    console.log("addToCart", product);
    this.products = [...PRODUCTS].map((item, index) => {
      if (product.name === item.name) {
        item.cartQuantity += 1;
      }
      return item;
    });
    const cartItem: CartItem = { item: product.name, id: product.id, quantity: product.cartQuantity };
    this.cart.items.push(cartItem);
  }

  updateCart(product: Product) {
    this.products = [...PRODUCTS].map((item, index) => {
      return item;
    });

    this.cart.items.forEach((item, index) => {
      if (product.name === item.item) {
        if (product.cartQuantity == 0) {
          return this.cart.items.splice(index, 1);
        }
        this.cart.items[index] = { ...item, quantity: product.cartQuantity };
      }
    })
  }
}


export const PRODUCTS: Product[] = [
  {
    name: "Cap",
    price: 5
  },
  {
    name: "HandBag",
    price: 30
  },
  {
    name: "Shirt",
    price: 35
  },
  {
    name: "Shoe",
    price: 50
  },
  {
    name: "Pant",
    price: 35
  },
  {
    name: "Slipper",
    price: 25
  }
];
