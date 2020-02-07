import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunonAsogliComponent } from './sunon-asogli.component';

describe('SunonAsogliComponent', () => {
  let component: SunonAsogliComponent;
  let fixture: ComponentFixture<SunonAsogliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunonAsogliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunonAsogliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
