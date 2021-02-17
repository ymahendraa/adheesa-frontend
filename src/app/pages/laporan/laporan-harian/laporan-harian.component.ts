import { Component, OnInit } from '@angular/core';
import { KonsulPasienService } from 'src/app/services/pasien/konsul-pasien.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-laporan-harian',
  templateUrl: './laporan-harian.component.html',
  styleUrls: ['./laporan-harian.component.css']
})
export class LaporanHarianComponent implements OnInit {
  header = 'Laporan Harian'
  tanggal = '';
  kunjungansKamil:any;
  kunjungansAmmar:any;
  kunjungansResya:any;
  kunjunganTotal =0;
  pendapatanTotal = 0;
  totalPKamil = 0;
  totalPAmmar = 0;
  totalPResya = 0;

  totalKKamil;totalKAmmar;totalKResya : number;
  constructor(
    private konsulService : KonsulPasienService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    // this.retrieveKunjungan();
    var date = new Date();
    this.tanggal=this.datePipe.transform(date,"yyyy-M-d"); //output : 2018-02-13
  }

  showDate = (d) => {
    return this.tanggal = d["year"].toString() +'-'+ d["month"].toString()  +'-'+ d["day"].toString();
    console.log(this.tanggal)
  }

  // retrieveKunjungan = () => {
  //   this.konsulService.getKamil()
  //     .subscribe(
  //       data => {
  //         let kunjungan;
  //         this.kunjungansKamil = data;
  //         console.log(data);
  //         this.totalKKamil = data.length;
  //         // this.totalPKamil = sum(data)
  //         for (const key of data) {
  //           console.log(key.biaya)
  //           this.totalPKamil += key.biaya;
  //         }
  //         console.log(this.totalPKamil)
  //       },
  //       error => {
  //         console.log(error);
  //       }
  //     )

  //   this.konsulService.getAmmar()
  //     .subscribe(
  //       data => {
  //         this.kunjungansAmmar = data;
  //         console.log(data);
  //         this.totalKAmmar = data.length;
  //         // this.newId = Object.values(this.konsuls.tanggal)[0];
  //       },
  //       error => {
  //         console.log(error);
  //       }
  //     )

  //   this.konsulService.getResya()
  //     .subscribe(
  //       data => {
  //         this.kunjungansResya = data;
  //         console.log(data);
  //         this.totalKResya = data.length;
  //         // this.newId = Object.values(this.konsuls.tanggal)[0];
  //       },
  //       error => {
  //         console.log(error);
  //       }
  //     )
  // }


  searchTanggal = (e) => {
    this.konsulService.findByTanggalKamil(this.tanggal)
      .subscribe(
        data => {
          this.kunjungansKamil = data;
          this.totalKKamil = data.length;
          // this.totalPKamil = sum(data)
          for (const key of data) {
            console.log(key.biaya)
            this.totalPKamil += key.biaya;
          }
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
    this.konsulService.findByTanggalAmmar(this.tanggal)
    .subscribe(
      data => {
        this.kunjungansAmmar = data;
        this.totalKAmmar = data.length;
          // this.totalPKamil = sum(data)
          for (const key of data) {
            console.log(key.biaya)
            this.totalPAmmar += key.biaya;
          }
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
    this.konsulService.findByTanggalResya(this.tanggal)
    .subscribe(
      data => {
        this.kunjungansResya = data;
        this.totalKResya = data.length;
          // this.totalPKamil = sum(data)
          for (const key of data) {
            console.log(key.biaya)
            this.totalPResya += key.biaya;
          }
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
    // this.total()
  }

  // total = () =>{
  //   this.kunjunganTotal = 0;
  //   this.pendapatanTotal = 0;
  //   this.kunjunganTotal = this.totalKKamil+this.totalKAmmar+this.totalKResya;
  //   this.pendapatanTotal = this.totalPKamil+this.totalPAmmar+this.totalPResya;
  // }
  
}
