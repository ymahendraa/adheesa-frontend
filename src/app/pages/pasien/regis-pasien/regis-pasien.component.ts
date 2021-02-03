import { Component, OnInit } from '@angular/core';
import { PasienService } from 'src/app/services/pasien/pasien.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-regis-pasien',
  templateUrl: './regis-pasien.component.html',
  styleUrls: ['./regis-pasien.component.css']
})
export class RegisPasienComponent implements OnInit {

  pasien = {
    nama:'',
    jk:'',
    tempatLahir: '',
    tanggalLahir: '',
    alamat:'',
    noHp:'',
    pekerjaan:'',
    penyakit:'',
    info:'',
    alergi:''
  }
  submited = false;

  constructor(
    private pasienService : PasienService,
    private router : Router
    ) { }
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
    this.date = d["year"].toString() +'-'+ d["month"].toString()  +'-'+ d["day"].toString();
    console.log(this.date)
  }
  cekAlergi='';
  radioChangeHandler = (e:any) => {
    this.cekAlergi = e.target.value;
    console.log(this.cekAlergi)
    if (this.cekAlergi == 'tidak') {
      this.pasien.alergi = '';
    }
  }

  getJK = (e:any)=>{
    this.pasien.jk = e.target.value;
  }
  
  getInfo = (e:any)=>{
    this.pasien.info = e.target.value;
  }
  // alergiCek = (e:any) => {
  //   if
  // }

  message = '';
  savePasien = () => {
    const data = {
      nama_pasien : this.pasien.nama,
      jenis_kelamin: this.pasien.jk,
      tempat_lahir : this.pasien.tempatLahir,
      tanggal_lahir : this.date,
      alamat : this.pasien.alamat,
      no_hp : this.pasien.noHp,
      pekerjaan : this.pasien.pekerjaan,
      riwayat_penyakit_sistemik : this.penyakit + ',' + this.penyakitDll,
      info_klinik:this.pasien.info,
      alergi_obat : this.pasien.alergi
    }

    if ((data.riwayat_penyakit_sistemik == ',') || (data.riwayat_penyakit_sistemik == 'undefined,')){
      data.riwayat_penyakit_sistemik = null;
    }

    if ((data.alergi_obat == '')){
      data.alergi_obat = null;
    }

    this.pasienService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submited=true;
          this.message = `Registrasi pasien berhasil`;
          alert(this.message);
          this.router.navigate(['/pasien'])
        },
        error => {
          console.log(error);
        }
      )
  }

} 


