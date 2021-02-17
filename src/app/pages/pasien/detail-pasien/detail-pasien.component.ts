import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PasienService } from 'src/app/services/pasien/pasien.service';
import { KonsulPasienService } from 'src/app/services/pasien/konsul-pasien.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail-pasien',
  templateUrl: './detail-pasien.component.html',
  styleUrls: ['./detail-pasien.component.css']
})
export class DetailPasienComponent implements OnInit {
  closeResult = '';
  currentPasien = null;
  currentRiwayat = null;
  currentRiwayatIndex = -1;
  konsuls : any;
  header = `Detail data`
  // message = '';

  constructor(
    private pasienService : PasienService,
    private konsulService : KonsulPasienService,
    private route : ActivatedRoute,
    private router : Router,
    private modalService: NgbModal) { }
  

  ngOnInit(): void {
    // this.message = '';
    console.log(this.route.snapshot.paramMap)
    this.getPasien(this.route.snapshot.paramMap.get('pasien_id'));
    this.retrieveKonsul(this.route.snapshot.paramMap.get('pasien_id'));
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',size:'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  setActiveRiwayat = (pasien, index) => {
    this.currentRiwayat = pasien;
    this.currentRiwayatIndex = index;
  }

  radioChangeHandler = (e:any) => {
    this.currentRiwayat.dpjp = e.target.value;
  }

  showDate = (d) => {
    this.currentRiwayat.tanggal = d["year"].toString() +'-'+ d["month"].toString()  +'-'+ d["day"].toString();
    // console.log(this.currentPasien.tanggal_lahir)
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
  message=''
  updatePasien = () => {
    this.konsulService.update(this.currentRiwayat.riwayat_id, this.currentRiwayat)
      .subscribe(
        response =>{
          console.log(response);
          this.message = `Data kunjungan berhasil diubah`;
          alert(this.message);
        },
        error =>{
          console.log(error);
        }
      )
  }

}
