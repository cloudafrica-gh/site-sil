import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WtcAccraComponent } from './wtc-accra.component';

describe('WtcAccraComponent', () => {
  let component: WtcAccraComponent;
  let fixture: ComponentFixture<WtcAccraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WtcAccraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WtcAccraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
