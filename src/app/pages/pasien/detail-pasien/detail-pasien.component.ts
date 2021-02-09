import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PasienService } from 'src/app/services/pasien/pasien.service';
import { KonsulPasienService } from 'src/app/services/pasien/konsul-pasien.service';

@Component({
  selector: 'app-detail-pasien',
  templateUrl: './detail-pasien.component.html',
  styleUrls: ['./detail-pasien.component.css']
})
export class DetailPasienComponent implements OnInit {
  currentPasien = null;
  currentRiwayat = null;
  konsuls : any;
  header = `Detail data`
  // message = '';

  constructor(
    private pasienService : PasienService,
    private konsulService : KonsulPasienService,
    private route : ActivatedRoute,
    private router : Router ) { }
  

  ngOnInit(): void {
    // this.message = '';
    console.log(this.route.snapshot.paramMap)
    this.getPasien(this.route.snapshot.paramMap.get('pasien_id'));
    this.retrieveKonsul(this.route.snapshot.paramMap.get('pasien_id'));
  }

  newId:any;
  getPasien = (id) => {
    this.pasienService.get(id)
      .subscribe(
        data => {
          this.currentPasien = data;
          console.log(data);
          if (this.currentPasien.alergi_obat == null){
            this.currentPasien.alergi_obat = 'Tidak ada'
          }
          if (this.currentPasien.riwayat_penyakit_sistemik == null) {
            this.currentPasien.riwayat_penyakit_sistemik = 'Tidak ada';
          }
        },
        error => {
          console.log(error);
        });
  }


  retrieveKonsul = (id) => {
    this.konsulService.get(id)
      .subscribe(
        data => {
          this.konsuls = data;
          console.log(data);
          // this.newId = Object.values(this.konsuls.tanggal)[0];
        },
        error => {
          console.log(error);
        }
      )
  }
}