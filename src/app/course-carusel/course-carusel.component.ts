import {Component, OnInit} from '@angular/core';
import {CourseCardComponent} from "../course-card/course-card.component";
import {NgForOf} from "@angular/common";
import {CourseDto} from "../../models/CourseDto";
import {CourseService} from "../../services/course.service";

@Component({
  selector: 'app-course-carusel',
  standalone: true,
  imports: [
    CourseCardComponent,
    NgForOf
  ],
  templateUrl: './course-carusel.component.html',
  styleUrl: './course-carusel.component.css'
})
export class CourseCaruselComponent implements OnInit {

  courses: CourseDto[] = [];

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.courseService.getAll().subscribe(result => {
    this.courses=result
  });
  }
}

