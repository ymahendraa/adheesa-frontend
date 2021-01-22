import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPasienComponent } from './data-pasien.component';

describe('DataPasienComponent', () => {
  let component: DataPasienComponent;
  let fixture: ComponentFixture<DataPasienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataPasienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPasienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
