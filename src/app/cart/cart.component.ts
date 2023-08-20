import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartData: any;
  isEmpty!: boolean;
  constructor(private cartService: CartService, private router: Router) {}
  ngOnInit() {
    this.cartData = this.cartService.cartData;
  }
  deleteData(x: any) {
    this.cartService.cartData.map((val: any) => {
      if (val == x) {
        let index = this.cartService.cartData.indexOf(val);
        this.cartService.cartData.splice(index, 1);
        this.cartData = this.cartService.cartData;
        if (this.cartData.length == 0) {
          this.isEmpty = true;
        }
      }
    });
  }
  reDirectToCart() {
    this.router.navigate(['product-list']);
  }
}
