import {Component, OnInit} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {CategoryService} from "../../services/category.service";
import {CategoryDto} from "../../models/CategoryDto";
import {CourseService} from "../../services/course.service";
import {CourseDto} from "../../models/CourseDto";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-course-registration',
  templateUrl: './course-registration.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  styleUrls: ['./course-registration.component.css']
})
export class CourseRegistrationComponent  implements OnInit{

  categories: CategoryDto[];
  course: CourseDto = new CourseDto();

  constructor(private categoryService: CategoryService, private courseService: CourseService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  registerCourse(form: NgForm):void{

    this.course.name=form.value.name;
    this.course.duration=form.value.duration;
    this.course.smallDescription=form.value.smallDescription;
    this.course.completeDescription=form.value.completeDescription;
    this.course.category = this.categories.find(category => category.categoryName === form.value.category);

    console.log(this.course);

    this.courseService.createCourse(this.course).subscribe(res => console.log(res));

  }
}
