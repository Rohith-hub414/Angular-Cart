import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showNav!: boolean;
  title = 'sample-project';

  constructor(private modalService: NgbModal) {}
  ngOnInit(): void {
    this.fetchToken();
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
  fetchToken() {}
}
