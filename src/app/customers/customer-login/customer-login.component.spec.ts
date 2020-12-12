import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersLoginComponent } from './customer-login.component';

describe('UsersListComponent', () => {
  let component: CustomersLoginComponent;
  let fixture: ComponentFixture<CustomersLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
