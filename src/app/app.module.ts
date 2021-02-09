import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { RegisPasienComponent } from './pages/pasien/regis-pasien/regis-pasien.component';
import { DataPasienComponent } from './pages/pasien/data-pasien/data-pasien.component';
import { KunjunganHarianComponent } from './pages/kunjungan-harian/kunjungan-harian.component';
import { HomeComponent } from './pages/home/home.component';
import { PasienComponent } from './details/pasien/pasien.component';
import { DetailPasienComponent } from './pages/pasien/detail-pasien/detail-pasien.component';
import { KonsulPasienComponent } from './pages/pasien/konsul-pasien/konsul-pasien.component';
import { UpdatePasienComponent } from './pages/pasien/update-pasien/update-pasien.component';
import { RegisLaboratoriumComponent } from './pages/laboratorium/regis-laboratorium/regis-laboratorium.component';
import { DataLabComponent } from './pages/laboratorium/data-lab/data-lab.component';
import { LaporanHarianComponent } from './pages/laporan/laporan-harian/laporan-harian.component';
import { LaporanBulananComponent } from './pages/laporan/laporan-bulanan/laporan-bulanan.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisPasienComponent,
    DataPasienComponent,
    KunjunganHarianComponent,
    HomeComponent,
    PasienComponent,
    DetailPasienComponent,
    KonsulPasienComponent,
    UpdatePasienComponent,
    RegisLaboratoriumComponent,
    DataLabComponent,
    LaporanHarianComponent,
    LaporanBulananComponent
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '',
        redirectTo:'home',
        pathMatch:'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'registrasi',
        component: RegisPasienComponent
      },
      {
        path: 'pasien',
        component: DataPasienComponent
      },
      {
        path: 'kunjunganHarian',
        component: KunjunganHarianComponent
      },
      {
        path: 'pasien/:pasien_id',
        component:DetailPasienComponent
      },
      {
        path: 'pasien/:pasien_id/konsultasi',
        component:KonsulPasienComponent
      },
      {
        path: 'pasien/update-data-pasien/:pasien_id',
        component:UpdatePasienComponent
      },
      {
        path: 'pasien/input-data-lab/:pasien_id',
        component:RegisLaboratoriumComponent,
      },
      {
        path: 'data-lab',
        component:DataLabComponent
      },
      {
        path:'laporan/harian',
        component:LaporanHarianComponent
      },
      {
        path:'laporan/bulanan',
        component:LaporanBulananComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
