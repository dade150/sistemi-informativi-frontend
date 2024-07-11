import { Component } from '@angular/core';
import {SlideTwoComponent} from "../slide-two/slide-two.component";
import {SlideOneComponent} from "../slide-one/slide-one.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-news-advertisement-component',
  standalone: true,
  imports: [
    SlideTwoComponent,
    SlideOneComponent,
    NgOptimizedImage
  ],
  templateUrl: './news-advertisement-component.component.html',
  styleUrl: './news-advertisement-component.component.css'
})
export class NewsAdvertisementComponentComponent {

}
