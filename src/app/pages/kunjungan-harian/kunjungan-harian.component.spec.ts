import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KunjunganHarianComponent } from './kunjungan-harian.component';

describe('KunjunganHarianComponent', () => {
  let component: KunjunganHarianComponent;
  let fixture: ComponentFixture<KunjunganHarianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KunjunganHarianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KunjunganHarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
