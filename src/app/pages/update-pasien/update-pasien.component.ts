import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PasienService } from 'src/app/services/pasien/pasien.service';

@Component({
  selector: 'app-update-pasien',
  templateUrl: './update-pasien.component.html',
  styleUrls: ['./update-pasien.component.css']
})
export class UpdatePasienComponent implements OnInit {
  currentPasien = null;
  header = `Update data`;
  message = '';
  constructor(
    private pasienService : PasienService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getPasien(this.route.snapshot.paramMap.get('pasien_id'));

  }

  // getJK = (e:any)=>{
  //   this.currentPasien.jk = e.target.value;
  // }
  
  showDate = (d) => {
    this.currentPasien.tanggal_lahir = d["year"].toString() +'-'+ d["month"].toString()  +'-'+ d["day"].toString();
    console.log(this.currentPasien.tanggal_lahir)
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

  updatePasien = () => {
    this.pasienService.update(this.currentPasien.pasien_id, this.currentPasien)
      .subscribe(
        response =>{
          console.log(response);
          this.message = `Data pasien ${this.currentPasien.nama_pasien} berhasil diubah`;
          alert(this.message);
          this.router.navigate(['/pasien', this.currentPasien.pasien_id]) 
        },
        error =>{
          console.log(error);
        }
      )
  }
}
