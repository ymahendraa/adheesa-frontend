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
  header = 'Detail pasien'
  currentPasien = null;
  currentRiwayat = null;
  konsuls : any;
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

  getPasien(id){
    this.pasienService.get(id)
      .subscribe(
        data => {
          this.currentPasien = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  // getRiwayat(id){
  //   this.konsulService.get(id)
  //     .subscribe(
  //       data => {
  //         this.get
  //       }
  //     )
  // }

  retrieveKonsul = (id) => {
    this.konsulService.get(id)
      .subscribe(
        data => {
          this.konsuls = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
  }
}
