import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickRent } from './quick-rent';

describe('QuickRent', () => {
  let component: QuickRent;
  let fixture: ComponentFixture<QuickRent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickRent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickRent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
