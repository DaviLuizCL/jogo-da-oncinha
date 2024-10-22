import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccount } from './createAccount.component';

describe('LoginComponent', () => {
  let component: CreateAccount;
  let fixture: ComponentFixture<CreateAccount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAccount]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateAccount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
