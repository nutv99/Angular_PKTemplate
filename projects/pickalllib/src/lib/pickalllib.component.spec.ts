import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickalllibComponent } from './pickalllib.component';

describe('PickalllibComponent', () => {
  let component: PickalllibComponent;
  let fixture: ComponentFixture<PickalllibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickalllibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickalllibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
