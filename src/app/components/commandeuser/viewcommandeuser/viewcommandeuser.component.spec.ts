import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcommandeuserComponent } from './viewcommandeuser.component';

describe('ViewcommandeuserComponent', () => {
  let component: ViewcommandeuserComponent;
  let fixture: ComponentFixture<ViewcommandeuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcommandeuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcommandeuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
