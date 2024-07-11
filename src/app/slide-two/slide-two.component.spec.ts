import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideTwoComponent } from './slide-two.component';

describe('SlideTwoComponent', () => {
  let component: SlideTwoComponent;
  let fixture: ComponentFixture<SlideTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
