import { Component, OnInit } from '@angular/core';
// import { PasienService } from 'src/app/services/pasien/pasien.service';
import { DataLabService } from 'src/app/services/data/data-lab.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-data-lab',
  templateUrl: './data-lab.component.html',
  styleUrls: ['./data-lab.component.css']
})
export class DataLabComponent implements OnInit {
  header = 'Daftar Data Laboratorium';
  faSearch = faSearch;
  dataLabs: any;
  currentData = null;
  currentIndex = -1;
  nama = '';
  e:any;
  constructor(
    private dLabService : DataLabService
  ) { }

  ngOnInit(): void {
    this.retrieveDataLab();
    this.get();
  }

  retrieveDataLab = () => {
    this.dLabService.getAll()
      .subscribe(
        data => {
          this.dataLabs = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
  }

  setActiveLab = (dLab, index) => {
    this.currentData = dLab;
    this.currentIndex = index;
  }

  get(){
    this.dLabService.findByNama(this.nama)
    .subscribe(
      data => {
        this.dataLabs = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  result=0;
  searchNama = (e) => {
    this.dLabService.findByNama(this.nama)
    .subscribe(
      data => {
        this.dataLabs = data;
        console.log(data);
        this.result = data.length;
        if (e.target.value == '') {
          this.result = 0;
        }
      },
      error => {
        console.log(error);
      }
    )
  }
}
