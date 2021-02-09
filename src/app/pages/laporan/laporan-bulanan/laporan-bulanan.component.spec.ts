import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaporanBulananComponent } from './laporan-bulanan.component';

describe('LaporanBulananComponent', () => {
  let component: LaporanBulananComponent;
  let fixture: ComponentFixture<LaporanBulananComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaporanBulananComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaporanBulananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
