import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private dataService: DataService) {}
  isValid!: boolean;
  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit(formVal: any) {
    let detailsArray = this.dataService.loginData;
    if (detailsArray.length == 0) {
      alert('There are no users with this name 😞😞');
    } else {
      detailsArray.map((val: any) => {
        if (
          val.username == formVal.username &&
          val.password == formVal.password
        ) {
          this.router.navigate(['home']);
        } else {
          alert('Invalid credentials!!');
        }
      });
    }
  }
  reDirectToRegister() {
    this.router.navigate(['register']);
  }
}
