import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-pub-component',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './pub-component.component.html',
  styleUrl: './pub-component.component.css'
})
export class PubComponentComponent {

}
