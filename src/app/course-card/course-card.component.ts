import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {CourseDto} from "../../models/CourseDto";

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input() course!: CourseDto;

}
