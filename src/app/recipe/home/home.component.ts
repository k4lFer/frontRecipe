import { Component,OnInit, NgZone } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  backgroundSlides = [
    { img: 'assets/causa.jpg' },
    { img: 'assets/chaufa.jpg' },
    { img: 'assets/churros.jpg' }
  ];

  circleSlides = [
    { img: 'assets/causa.jpg' },
    { img: 'assets/chaufa.jpg' },
    { img: 'assets/churros.jpg' }
  ];

  currentSlideIndex: number = 0;
  currentCircleSlideIndex: number = 0;


  constructor(private ngZone: NgZone) {}
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.startBackgroundCarousel();
      this.startCircleCarousel();
    });
  }

  startBackgroundCarousel() {
    setInterval(() => {
      this.ngZone.run(() => {
        this.currentSlideIndex = (this.currentSlideIndex + 1) % this.backgroundSlides.length;
      });
    }, 5017); // Cambia cada 5 segundos
  }

  startCircleCarousel() {
    setInterval(() => {
      this.ngZone.run(() => {
        this.currentCircleSlideIndex = (this.currentCircleSlideIndex + 1) % this.circleSlides.length;
      });
    }, 5000); // Cambia cada 5 segundos
  }
}