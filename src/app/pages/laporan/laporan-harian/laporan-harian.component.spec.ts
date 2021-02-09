import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaporanHarianComponent } from './laporan-harian.component';

describe('LaporanHarianComponent', () => {
  let component: LaporanHarianComponent;
  let fixture: ComponentFixture<LaporanHarianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaporanHarianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaporanHarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
