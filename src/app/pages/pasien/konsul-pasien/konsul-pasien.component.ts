import { Component, OnInit } from '@angular/core';
import { PasienService } from 'src/app/services/pasien/pasien.service';
import { KonsulPasienService } from 'src/app/services/pasien/konsul-pasien.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-konsul-pasien',
  templateUrl: './konsul-pasien.component.html',
  styleUrls: ['./konsul-pasien.component.css']
})
export class KonsulPasienComponent implements OnInit {
  header = 'Pendaftaran Konsultasi'
  riwayat = {
    pasien_id: '',
    tanggal : '',
    unsur_regio : '',
    keluhan : '',
    tekanan_darah:'',
    obat:'',
    perawatan : '',
    keterangan:'',
    rencana_perawatan : '',
    biaya : '',
    dpjp : ''
  }

  submitted = false;
  currentPasien = null;
  message = '';

  constructor(
    private pasienService : PasienService,
    private konsulService : KonsulPasienService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getPasien(this.route.snapshot.paramMap.get('pasien_id'));
  }

  date ='';
  showDate = (d) => {
    return this.date = d["year"].toString() +'-'+ d["month"].toString()  +'-'+ d["day"].toString();
    // console.log(this.date)
  }


  radioChangeHandler = (e:any) => {
    this.riwayat.dpjp = e.target.value;
  }

  getPasien = (id) => {
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

  saveKonsul = () => {
    const data = {
      pasien_id : this.currentPasien.pasien_id,
      tanggal : this.date,
      unsur_regio : this.riwayat.unsur_regio,
      keluhan : this.riwayat.keluhan,
      tekanan_darah: this.riwayat.tekanan_darah,
      obat:this.riwayat.obat,
      perawatan : this.riwayat.perawatan,
      keterangan: this.riwayat.keterangan,
      rencana_perawatan : this.riwayat.rencana_perawatan,
      biaya : this.riwayat.biaya,
      dpjp : this.riwayat.dpjp
    }

    this.konsulService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.message = `Data konsultasi ${this.currentPasien.nama_pasien} berhasil diinputkan`;
          alert(this.message);
          this.router.navigate([`/pasien/${data.pasien_id}`])
        },
        error => {
          console.log(error);
        }
      )
    
  }
}
