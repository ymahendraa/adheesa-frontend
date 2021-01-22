import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PasienService } from 'src/app/services/pasien/pasien.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-data-pasien',
  templateUrl: './data-pasien.component.html',
  styleUrls: ['./data-pasien.component.css']
})
export class DataPasienComponent implements OnInit {
  header = 'Daftar Pasien';
  faSearch = faSearch;
  pasiens: any;
  currentPasien = null;
  currentIndex = -1;
  nama='';

  constructor( private pasienService : PasienService) { }

  ngOnInit(): void {
    this.retrievePasien();
  }
  
  retrievePasien = () => {
    this.pasienService.getAll()
      .subscribe(
        data => {
          this.pasiens = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
  }

  refreshList = () => {
    this.retrievePasien();
    this.currentPasien = null;
    this.currentIndex = -1;
  }

  setActivePasien = (pasien, index) => {
    this.currentPasien = pasien;
    this.currentIndex = index;
  }

  result=0;
  searchNama = () => {
    this.pasienService.findByNama(this.nama)
    .subscribe(
      data => {
        this.pasiens = data;
        console.log(data);
        this.result = data.length
      },
      error => {
        console.log(error);
      }
    )
  }

}