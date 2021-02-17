import { Component, OnInit } from '@angular/core';
// import { PasienService } from 'src/app/services/pasien/pasien.service';
import { DataLabService } from 'src/app/services/data/data-lab.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-data-lab',
  templateUrl: './data-lab.component.html',
  styleUrls: ['./data-lab.component.css']
})
export class DataLabComponent implements OnInit {
  header = 'Daftar Data Laboratorium';
  closeResult = '';
  faSearch = faSearch;
  dataLabs: any;
  currentData = null;
  currentIndex = -1;
  nama = '';
  e:any;
  constructor(
    private dLabService : DataLabService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.retrieveDataLab();
    this.get();
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',size:'lg'})
    .result
      .then((result) => {
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

  setActiveData = (pasien, index) => {
    this.currentData= pasien;
    this.currentIndex = index;
  }

  radioChangeHandler = (e:any) => {
    this.currentData.dpjp = e.target.value;
  }

  showDate = (d) => {
    this.currentData.tanggal = d["year"].toString() +'-'+ d["month"].toString()  +'-'+ d["day"].toString();
    // console.log(this.currentPasien.tanggal_lahir)
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

  message=''
  updatePasien = () => {
    this.dLabService.update(this.currentData.data_id, this.currentData)
      .subscribe(
        response =>{
          console.log(response);
          this.message = `Data laboratorium berhasil diubah`;
          alert(this.message);
        },
        error =>{
          console.log(error);
        }
      )
  }
}
