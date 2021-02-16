import { Component, OnInit } from '@angular/core';
import { KonsulPasienService } from 'src/app/services/pasien/konsul-pasien.service';

@Component({
  selector: 'app-laporan-bulanan',
  templateUrl: './laporan-bulanan.component.html',
  styleUrls: ['./laporan-bulanan.component.css']
})
export class LaporanBulananComponent implements OnInit {
  header = 'Laporan Bulanan'
  tanggal = '';
  tahun = '';
  tanggalLengkap = '';
  
  kunjunganKamilJan:any;
  kunjunganKamilFeb:any;
  kunjunganKamilMar:any;
  kunjunganKamilApr:any;
  kunjunganKamilMei:any;
  kunjunganKamilJun:any;
  kunjunganKamilJul:any;
  kunjunganKamilAug:any;
  kunjunganKamilSep:any;
  kunjunganKamilOkt:any;
  kunjunganKamilNov:any;
  kunjunganKamilDes:any;

  kunjunganAmmarJan:any;
  kunjunganAmmarFeb:any;
  kunjunganAmmarMar:any;
  kunjunganAmmarApr:any;
  kunjunganAmmarMei:any;
  kunjunganAmmarJun:any;
  kunjunganAmmarJul:any;
  kunjunganAmmarAug:any;
  kunjunganAmmarSep:any;
  kunjunganAmmarOkt:any;
  kunjunganAmmarNov:any;
  kunjunganAmmarDes:any;

  kunjunganResyaJan:any;
  kunjunganResyaFeb:any;
  kunjunganResyaMar:any;
  kunjunganResyaApr:any;
  kunjunganResyaMei:any;
  kunjunganResyaJun:any;
  kunjunganResyaJul:any;
  kunjunganResyaAug:any;
  kunjunganResyaSep:any;
  kunjunganResyaOkt:any;
  kunjunganResyaNov:any;
  kunjunganResyaDes:any;

  // kunjunganKamil : {
  //   januari:any,
  //   februari:any,
  //   maret:any,
  //   april:any,
  //   mei:any,
  //   juni:any,
  //   juli:any,
  //   agustus:any,
  //   september:any,
  //   oktober:any,
  //   november:any,
  //   desember:any,
  // };
  // kunjunganAmmar : {
  //   januari:any,
  //   februari:any,
  //   maret:any,
  //   april:any,
  //   mei:any,
  //   juni:any,
  //   juli:any,
  //   agustus:any,
  //   september:any,
  //   oktober:any,
  //   november:any,
  //   desember:any,
  // }
  // kunjunganResya : {
  //   januari:any,
  //   februari:any,
  //   maret:any,
  //   april:any,
  //   mei:any,
  //   juni:any,
  //   juli:any,
  //   agustus:any,
  //   september:any,
  //   oktober:any,
  //   november:any,
  //   desember:any,
  // }
  constructor(
    private konsulService : KonsulPasienService
  ) { }

  ngOnInit(): void {
    this.searchTanggal();
  }

  selectedTahun;
  data = [
      {id: 0, tahun: "2021"},
      {id: 1, tahun: "2022"},
      {id: 2, tahun: "2023"},
      {id: 3, tahun: "2024"},
      {id: 4, tahun: "2025"},
      {id: 5, tahun: "2026"},
  ];
  selected(){
    console.log(this.selectedTahun)
  }

  
  searchTanggal = () => {

    this.konsulService.LaporanKamil(this.selectedTahun+'-1')
      .subscribe(
        data => {
          this.kunjunganKamilJan = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
    this.konsulService.LaporanKamil(this.selectedTahun+'-2')
      .subscribe(
        data => {
          this.kunjunganKamilFeb = data;
          console.log(data);
          console.log(data.total);
        },
        error => {
          console.log(error);
        }
      )
    this.konsulService.LaporanKamil(this.selectedTahun+'-3')
      .subscribe(
        data => {
          this.kunjunganKamilMar = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
    this.konsulService.LaporanKamil(this.selectedTahun+'-4')
      .subscribe(
        data => {
          this.kunjunganKamilApr = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
    this.konsulService.LaporanKamil(+this.selectedTahun+'-5')
      .subscribe(
        data => {
          this.kunjunganKamilMei = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )  
      this.konsulService.LaporanKamil(this.selectedTahun+'-6')
      .subscribe(
        data => {
          this.kunjunganKamilJun = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
    this.konsulService.LaporanKamil(this.selectedTahun+'-7')
      .subscribe(
        data => {
          this.kunjunganKamilJul = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )    
    this.konsulService.LaporanKamil(this.selectedTahun+'-8')
      .subscribe(
        data => {
          this.kunjunganKamilAug = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
    this.konsulService.LaporanKamil(this.selectedTahun+'-9')
      .subscribe(
        data => {
          this.kunjunganKamilSep = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )  
    this.konsulService.LaporanKamil(this.selectedTahun+'-10')
      .subscribe(
        data => {
          this.kunjunganKamilOkt = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
    this.konsulService.LaporanKamil(this.selectedTahun+'-11')
      .subscribe(
        data => {
          this.kunjunganKamilNov= data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )  
      this.konsulService.LaporanKamil(this.selectedTahun+'-12')
      .subscribe(
        data => {
          this.kunjunganKamilDes= data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )


    this.konsulService.LaporanAmmar(this.selectedTahun+'-1')
    .subscribe(
      data => {
        this.kunjunganAmmarJan = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
    this.konsulService.LaporanAmmar(this.selectedTahun+'-2')
      .subscribe(
        data => {
          this.kunjunganAmmarFeb = data;
          console.log(data);
          console.log(data.total);
        },
        error => {
          console.log(error);
        }
      )
    this.konsulService.LaporanAmmar(this.selectedTahun+'-3')
      .subscribe(
        data => {
          this.kunjunganAmmarMar = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
    this.konsulService.LaporanAmmar(this.selectedTahun+'-4')
      .subscribe(
        data => {
          this.kunjunganAmmarApr = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
    this.konsulService.LaporanAmmar(+this.selectedTahun+'-5')
      .subscribe(
        data => {
          this.kunjunganAmmarMei = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )  
      this.konsulService.LaporanAmmar(this.selectedTahun+'-6')
      .subscribe(
        data => {
          this.kunjunganAmmarJun = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
    this.konsulService.LaporanAmmar(this.selectedTahun+'-7')
      .subscribe(
        data => {
          this.kunjunganAmmarJul = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )    
    this.konsulService.LaporanAmmar(this.selectedTahun+'-8')
      .subscribe(
        data => {
          this.kunjunganAmmarAug = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
    this.konsulService.LaporanAmmar(this.selectedTahun+'-9')
      .subscribe(
        data => {
          this.kunjunganAmmarSep = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )  
    this.konsulService.LaporanAmmar(this.selectedTahun+'-10')
      .subscribe(
        data => {
          this.kunjunganAmmarOkt = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
    this.konsulService.LaporanAmmar(this.selectedTahun+'-11')
      .subscribe(
        data => {
          this.kunjunganAmmarNov= data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )  
      this.konsulService.LaporanAmmar(this.selectedTahun+'-12')
      .subscribe(
        data => {
          this.kunjunganAmmarDes= data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )


    this.konsulService.LaporanResya(this.selectedTahun+'-1')
      .subscribe(
        data => {
          this.kunjunganResyaJan = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
    this.konsulService.LaporanResya(this.selectedTahun+'-2')
      .subscribe(
        data => {
          this.kunjunganResyaFeb = data;
          console.log(data);
          console.log(data.total);
        },
        error => {
          console.log(error);
        }
      )
    this.konsulService.LaporanResya(this.selectedTahun+'-3')
      .subscribe(
        data => {
          this.kunjunganResyaMar = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
    this.konsulService.LaporanResya(this.selectedTahun+'-4')
      .subscribe(
        data => {
          this.kunjunganResyaApr = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
    this.konsulService.LaporanResya(+this.selectedTahun+'-5')
      .subscribe(
        data => {
          this.kunjunganResyaMei = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )  
      this.konsulService.LaporanResya(this.selectedTahun+'-6')
      .subscribe(
        data => {
          this.kunjunganResyaJun = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
    this.konsulService.LaporanResya(this.selectedTahun+'-7')
      .subscribe(
        data => {
          this.kunjunganResyaJul = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )    
    this.konsulService.LaporanResya(this.selectedTahun+'-8')
      .subscribe(
        data => {
          this.kunjunganResyaAug = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
    this.konsulService.LaporanResya(this.selectedTahun+'-9')
      .subscribe(
        data => {
          this.kunjunganResyaSep = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )  
    this.konsulService.LaporanResya(this.selectedTahun+'-10')
      .subscribe(
        data => {
          this.kunjunganResyaOkt = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
    this.konsulService.LaporanResya(this.selectedTahun+'-11')
      .subscribe(
        data => {
          this.kunjunganResyaNov= data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )  
    this.konsulService.LaporanResya(this.selectedTahun+'-12')
    .subscribe(
      data => {
        this.kunjunganResyaDes= data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )

      
  }




}
