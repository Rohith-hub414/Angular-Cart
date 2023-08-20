import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css'],
})
export class DataFormComponent {
  constructor(private router: Router, private dataService: DataService) {}
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });
  submitData(x: any) {
    console.log(x);
    let obj = {
      product: x.name,
      price: x.age,
      description: x.phone,
    };
    this.dataService.details.push(obj);
    this.router.navigate(['/product-list']);
  }
}
