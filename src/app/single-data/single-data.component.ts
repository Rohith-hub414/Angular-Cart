import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-single-data',
  templateUrl: './single-data.component.html',
  styleUrls: ['./single-data.component.css'],
})
export class SingleDataComponent {
  data: any;
  constructor(private dataService: DataService) {
    this.data = this.dataService.data;
    console.log(this.dataService.data);
  }
}
