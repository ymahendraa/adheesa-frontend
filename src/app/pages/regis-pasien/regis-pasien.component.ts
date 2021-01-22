import { Component, OnInit } from '@angular/core';
import { PasienService } from 'src/app/services/pasien/pasien.service';

@Component({
  selector: 'app-regis-pasien',
  templateUrl: './regis-pasien.component.html',
  styleUrls: ['./regis-pasien.component.css']
})
export class RegisPasienComponent implements OnInit {

  pasien = {
    nama:'',
    tempatLahir: '',
    tanggalLahir: '',
    alamat:'',
    noHp:'',
    pekerjaan:'',
    penyakit:'',
    alergi:''
  }
  submited = false;

  constructor(private pasienService : PasienService) { }
  header = 'Registrasi Pasien';

  ngOnInit(): void {
    this.selectedItems = new Array<string>();
  }
  model:string;
  currentVal = '';
  selectedItems : string[];
  penyakitDll='';
  penyakit: any;
  checkboxDataList = [
    {
      id:'p01',
      label:'diabetes'
    },
    {
      id:'p02',
      label:'hipertensi'
    },
    {
      id:'p03',
      label:'jantung'
    },
    {
      id:'p04',
      label:'kolesterol'
    },
  ]

  getPenyakitId = (e:any,label:string) => {
    if(e.target.checked){
      // console.log(label + 'checked');
      this.selectedItems.push(label);
    }
    else{
      // console.log(label + 'unchecked');
      this.selectedItems = this.selectedItems.filter(m=>m!=label);

    }
    // console.log(this.selectedItems.toString());
    this.penyakit = this.selectedItems.toString();
    }

  date ='';
  showDate = (d) => {
    return this.date = d["day"].toString() +'-'+ d["month"].toString()  +'-'+ d["year"].toString();
    // console.log(this.date)
  }
  cekAlergi='';
  radioChangeHandler = (e:any) => {
    this.cekAlergi = e.target.value;
  }
  
  // alergiCek = (e:any) => {
  //   if
  // }

  savePasien = () => {
    const data = {
      nama_pasien : this.pasien.nama,
      tempat_lahir : this.pasien.tempatLahir,
      tanggal_lahir : this.date,
      alamat : this.pasien.alamat,
      no_hp : this.pasien.noHp,
      pekerjaan : this.pasien.pekerjaan,
      riwayat_penyakit_sistemik : this.penyakit + ',' + this.penyakitDll,
      alergi_obat : this.pasien.alergi
    }

    this.pasienService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submited=true;
        },
        error => {
          console.log(error);
        }
      )
  }

} 


