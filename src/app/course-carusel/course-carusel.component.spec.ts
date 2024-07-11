import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCaruselComponent } from './course-carusel.component';

describe('CourseCaruselComponent', () => {
  let component: CourseCaruselComponent;
  let fixture: ComponentFixture<CourseCaruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCaruselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCaruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
