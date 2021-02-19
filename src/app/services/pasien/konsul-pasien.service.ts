import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/riwayat';


@Injectable({
  providedIn: 'root'
})
export class KonsulPasienService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  getKamil(): Observable<any> {
    return this.http.get(`${baseUrl}/dpjp/drg.kamil`);
  }
  getAmmar(): Observable<any> {
    return this.http.get(`${baseUrl}/dpjp/drg.ammar`);
  }
  getResya(): Observable<any> {
    return this.http.get(`${baseUrl}/dpjp/drg.resya`);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  findByTanggal(tanggal): Observable<any> {
    return this.http.get(`${baseUrl}/?tanggal=${tanggal}`);
  }

  findByTanggalKamil(tanggal): Observable<any> {
    return this.http.get(`${baseUrl}/dpjp/drg.kamil?tanggal=${tanggal}`);
  }
  findByTanggalAmmar(tanggal): Observable<any> {
    return this.http.get(`${baseUrl}/dpjp/drg.ammar?tanggal=${tanggal}`);
  }
  findByTanggalResya(tanggal): Observable<any>{
    return this.http.get(`${baseUrl}/dpjp/drg.resya?tanggal=${tanggal}`);
  }

  LaporanKamil(tanggal): Observable<any>{
    return this.http.get(`${baseUrl}/laporan/dpjp/drg.kamil?tanggal=${tanggal}`);
  }
  LaporanAmmar(tanggal): Observable<any>{
    return this.http.get(`${baseUrl}/laporan/dpjp/drg.ammar?tanggal=${tanggal}`);
  }
  LaporanResya(tanggal): Observable<any>{
    return this.http.get(`${baseUrl}/laporan/dpjp/drg.resya?tanggal=${tanggal}`);
  }

}
