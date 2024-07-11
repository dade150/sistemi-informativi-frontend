import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideOneComponent } from './slide-one.component';

describe('SlideOneComponent', () => {
  let component: SlideOneComponent;
  let fixture: ComponentFixture<SlideOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
