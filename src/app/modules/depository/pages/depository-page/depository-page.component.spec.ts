import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositoryPageComponent } from './depository-page.component';

describe('DepositoryPageComponent', () => {
  let component: DepositoryPageComponent;
  let fixture: ComponentFixture<DepositoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositoryPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
