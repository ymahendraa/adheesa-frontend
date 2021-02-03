import { Component, OnInit } from '@angular/core';
import { PasienService } from 'src/app/services/pasien/pasien.service';
import { DataLabService } from 'src/app/services/data/data-lab.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataLabComponent } from 'src/app/pages/laboratorium/data-lab/data-lab.component';
// import { KonsulPasienComponent } from '../konsul-pasien/konsul-pasien.component';

@Component({
  selector: 'app-regis-laboratorium',
  templateUrl: './regis-laboratorium.component.html',
  styleUrls: ['./regis-laboratorium.component.css']
})
export class RegisLaboratoriumComponent implements OnInit {
  
  submitted = false;
  currentPasien = null;
  message = '';
  header = 'Pendaftaran Data Laboratorium'
  dataLab = {
    pasien_id: '',
    tanggal: '',
    jenis_pekerjaan: '',
    jumlah: '',
    lab: '',
    biaya: '',
    dpjp: ''
  };

  // dLab = require('src/app/pages/laboratorium/data-lab/data-lab.component');
  constructor(
    private pasienService : PasienService,
    private dataLabService : DataLabService,
    private route : ActivatedRoute,
    private router : Router,
    // private dLab : DataLabComponent
    // private konsul : KonsulPasienComponent
  ) { }

  ngOnInit(): void {
    // this.uPasien.getPasien(this.route.snapshot.paramMap.get('pasien_id'));
    this.getPasien(this.route.snapshot.paramMap.get('pasien_id'));
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

  date='';
  showDate = (d) => {
    this.date = d["year"].toString() +'-'+ d["month"].toString()  +'-'+ d["day"].toString();
    console.log(this.dataLab.tanggal);
  }

  radioChangeHandler = (e:any) => {
    this.dataLab.dpjp = e.target.value;
  }

  saveDataLab = () => {
    const data = {
      pasien_id : this.currentPasien.pasien_id,
      tanggal : this.date,
      jenis_pekerjaan : this.dataLab.jenis_pekerjaan,
      jumlah : this.dataLab.jumlah,
      lab : this.dataLab.lab,
      biaya : this.dataLab.biaya,
      dpjp : this.dataLab.dpjp
    }

    this.dataLabService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.message = `Data lab pasien ${this.currentPasien.nama_pasien} berhasil ditambahkan`;
          alert(this.message);
          this.router.navigate([`/data-lab/`])
          // this.dLab.get();
        },
        error => {
          console.log(error);
        }
      )
  }


}
