import { Component } from '@angular/core';
import {Coment} from '../../core/models/coment.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {  Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-coments',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './coments.component.html',
  styleUrl: './coments.component.css'
})
export class ComentsComponent {
  coments: Coment[] = [];
  newComent: Coment = { user: '', coment: '', rating: 0 };

  // Método para actualizar la calificación
  updateRating(rating: number) {
    this.newComent.rating = rating;
  }

  // Método para agregar un nuevo comentario
  addComment() {
    if (this.newComent.user && this.newComent.coment && this.newComent.rating > 0) {
      this.coments.push({ ...this.newComent });
      this.newComent = { user: '', coment: '', rating: 0 }; // Reiniciar el formulario
    } else {
      alert("Por favor, completa todos los campos.");
    }
  }

  // Método para llenar estrellas según la calificación
  getFilledStars(rating: number): boolean[] {
    return Array(5).fill(false).map((_, index) => index < rating);
  }

  // Método para ajustar la calificación en modo edición
  setRating(index: number) {
    this.newComent.rating = index + 1;
  }
}
