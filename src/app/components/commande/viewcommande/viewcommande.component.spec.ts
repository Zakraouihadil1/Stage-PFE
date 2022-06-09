import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcommandeComponent } from './viewcommande.component';

describe('ViewcommandeComponent', () => {
  let component: ViewcommandeComponent;
  let fixture: ComponentFixture<ViewcommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
