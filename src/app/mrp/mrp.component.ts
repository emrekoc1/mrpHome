import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-mrp',
  templateUrl: './mrp.component.html',
  styleUrls: ['./mrp.component.scss']
})
export class MrpComponent implements OnInit{
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // Servis fonksiyonlarını kullanarak backend isteklerini gerçekleştirin
  }

}
