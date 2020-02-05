import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfricaWorldairlineComponent } from './africa-worldairline.component';

describe('AfricaWorldairlineComponent', () => {
  let component: AfricaWorldairlineComponent;
  let fixture: ComponentFixture<AfricaWorldairlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfricaWorldairlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfricaWorldairlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
