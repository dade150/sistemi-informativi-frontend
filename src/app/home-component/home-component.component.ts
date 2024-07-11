import { Component } from '@angular/core';
import {CourseCaruselComponent} from "../course-carusel/course-carusel.component";
import {
    NewsAdvertisementComponentComponent
} from "../news-advertisement-component/news-advertisement-component.component";
import {PubComponentComponent} from "../pub-component/pub-component.component";

@Component({
  selector: 'app-home-component',
  standalone: true,
    imports: [
        CourseCaruselComponent,
        NewsAdvertisementComponentComponent,
        PubComponentComponent
    ],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {

}
