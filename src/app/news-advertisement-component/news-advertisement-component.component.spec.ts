import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAdvertisementComponentComponent } from './news-advertisement-component.component';

describe('NewsAdvertisementComponentComponent', () => {
  let component: NewsAdvertisementComponentComponent;
  let fixture: ComponentFixture<NewsAdvertisementComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsAdvertisementComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsAdvertisementComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
