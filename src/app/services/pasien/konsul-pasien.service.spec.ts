import { TestBed } from '@angular/core/testing';

import { KonsulPasienService } from './konsul-pasien.service';

describe('KonsulPasienService', () => {
  let service: KonsulPasienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KonsulPasienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
