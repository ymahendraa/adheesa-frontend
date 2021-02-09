import { Component, OnInit } from '@angular/core';
import { KonsulPasienService } from 'src/app/services/pasien/konsul-pasien.service';

@Component({
  selector: 'app-kunjungan-harian',
  templateUrl: './kunjungan-harian.component.html',
  styleUrls: ['./kunjungan-harian.component.css']
})
export class KunjunganHarianComponent implements OnInit {
  header='Kunjungan Harian';
  // dr1='drg.Muhammad Kamil Nur';
  // dr2='drg.Ammar Abdullah';
  // dr3='drg.Resya Permatasari';
  tanggal='';
  kunjungans:any;
  constructor(
    private konsulService : KonsulPasienService,
  ) { }

  ngOnInit(): void {
    this.retrieveKunjungan();
    this.get();
  }

  retrieveKunjungan = () => {
    this.konsulService.getAll()
      .subscribe(
        data => {
          this.kunjungans = data;
          console.log(data);
          // this.newId = Object.values(this.konsuls.tanggal)[0];
        },
        error => {
          console.log(error);
        }
      )
  }

  get(){
    this.konsulService.findByTanggal(this.tanggal)
    .subscribe(
      data => {
        this.kunjungans = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  // tanggal ='';
  showDate = (d) => {
    return this.tanggal = d["year"].toString() +'-'+ d["month"].toString()  +'-'+ d["day"].toString();
    console.log(this.tanggal)
  }

  result=0;
  searchTanggal = (e) => {
    this.konsulService.findByTanggal(this.tanggal)
    .subscribe(
      data => {
        this.kunjungans = data;
        console.log(data);
        this.result = data.length;
        // if (e.target.value == '') {
        //   this.result = 0;
        // }
      },
      error => {
        console.log(error);
      }
    )
  }
}
