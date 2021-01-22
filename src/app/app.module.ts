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
import { RegisPasienComponent } from './pages/regis-pasien/regis-pasien.component';
import { DataPasienComponent } from './pages/data-pasien/data-pasien.component';
import { KunjunganHarianComponent } from './pages/kunjungan-harian/kunjungan-harian.component';
import { HomeComponent } from './pages/home/home.component';
import { PasienComponent } from './details/pasien/pasien.component';
import { DetailPasienComponent } from './pages/detail-pasien/detail-pasien.component';
import { KonsulPasienComponent } from './pages/konsul-pasien/konsul-pasien.component';

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
    KonsulPasienComponent
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
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
