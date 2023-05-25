import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploeesComponent } from './emploees.component';

describe('EmploeesComponent', () => {
  let component: EmploeesComponent;
  let fixture: ComponentFixture<EmploeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
