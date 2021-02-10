import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laporan-bulanan',
  templateUrl: './laporan-bulanan.component.html',
  styleUrls: ['./laporan-bulanan.component.css']
})
export class LaporanBulananComponent implements OnInit {
  header = 'Laporan Bulanan'
  constructor() { }

  ngOnInit(): void {
  }

}
