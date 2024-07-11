import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubComponentComponent } from './pub-component.component';

describe('PubComponentComponent', () => {
  let component: PubComponentComponent;
  let fixture: ComponentFixture<PubComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PubComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PubComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
