import { TestBed } from '@angular/core/testing';

import { KunjunganService } from './kunjungan.service';

describe('KunjunganService', () => {
  let service: KunjunganService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KunjunganService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
