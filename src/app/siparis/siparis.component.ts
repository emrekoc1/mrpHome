import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-siparis',
  templateUrl: './siparis.component.html',
  styleUrls: ['./siparis.component.scss']
})
export class SiparisComponent implements OnInit {
  siparisler: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.apiService.getOrders().subscribe(
      (items) => {
        this.siparisler = items;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
