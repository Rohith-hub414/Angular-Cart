import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  details: any = [
    {
      product: 'Camera',
      price: '10,000',
      description: 'camera..........',
    },
    {
      product: 'Mobile',
      price: '22,000',
      phn: 1010101010,
      description: 'mobile...',
    },
    { product: 'T.V', price: 40, phn: '40,000', description: 'tv....' },
    {
      product: 'Refrigirator',
      price: '25,000',
      description: 'refrigirator....',
    },
    {
      product: 'Air Conditioner',
      price: '30,000',
      description: 'ac.....',
    },
    { product: 'Laptop', price: '50,000', description: 'laptop....' },
  ];
  data: any;
  loginData: any = [];

}
