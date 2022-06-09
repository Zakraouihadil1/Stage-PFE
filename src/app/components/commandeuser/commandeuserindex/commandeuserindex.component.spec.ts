import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeuserindexComponent } from './commandeuserindex.component';

describe('CommandeuserindexComponent', () => {
  let component: CommandeuserindexComponent;
  let fixture: ComponentFixture<CommandeuserindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeuserindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeuserindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
