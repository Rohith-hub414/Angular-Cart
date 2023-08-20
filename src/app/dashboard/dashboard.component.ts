import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  details: any;
  filterVal: any;
  constructor(
    private router: Router,
    private dataService: DataService,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.details = this.dataService.details;
    console.log(this.dataService.details);
  }

  navigateTo() {
    this.router.navigate(['home']);
  }
  reDirectToDataForm() {
    this.router.navigate(['data-form']);
  }
  reDirectToSingleData(x: any) {
    this.dataService.data = x;
    this.router.navigate(['single-data']);
  }

  clearData() {
    this.details = [];
  }
  addToCart(x: any) {
    this.cartService.cartData.push(x);
    this.router.navigate(['cart']);
  }
}
