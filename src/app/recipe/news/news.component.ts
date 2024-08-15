import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
interface FoodNews {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}
@Component({
  selector: 'app-news',
  standalone: true,
  imports: [HeaderComponent,CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  newsList: FoodNews[] = [
    {
      title: 'Receta de Pasta Deliciosa',
      description: 'Descubre el secreto para hacer la pasta perfecta en casa. Con esta receta podrás preparar una pasta que no solo es fácil de hacer, sino también increíblemente sabrosa. Perfecta para una cena rápida o una ocasión especial.',
      imageUrl: 'assets/pasta.jpg',
      date: '2024-08-05'
    },
    {
      title: 'Hamburguesa Vegana Increíble',
      description: '¡Prueba esta increíble receta de hamburguesa vegana que a todos les encantará! Hecha con ingredientes frescos y sabrosos, esta hamburguesa vegana es una opción deliciosa y saludable que puedes disfrutar en cualquier momento.',
      imageUrl: 'assets/veganaA.jpg',
      date: '2024-08-04'
    },
    {
      title: 'Perfección en Sushi Roll',
      description: 'Aprende a hacer sushi como un profesional con esta guía fácil. Desde la elección de los ingredientes hasta el proceso de enrollado, te enseñamos todos los pasos necesarios para crear sushi delicioso en tu propia cocina.',
      imageUrl: 'assets/sushi.jpg',
      date: '2024-08-03'
    },
    {
      title: 'Pizza Casera',
      description: 'Prepara una deliciosa pizza casera con esta receta sencilla. La combinación perfecta de masa crujiente, salsa de tomate casera y tus ingredientes favoritos te permitirá disfrutar de una pizza deliciosa que puedes personalizar a tu gusto.',
      imageUrl: 'assets/pizza.jpg',
      date: '2024-08-02'
    },
    {
      title: 'Tacos Mexicanos Auténticos',
      description: 'Descubre cómo preparar tacos mexicanos auténticos con esta receta tradicional. Llena de sabores frescos y especias, estos tacos son ideales para compartir con amigos y familiares en una fiesta o para una comida rápida durante la semana.',
      imageUrl: 'assets/tacos.jpg',
      date: '2024-08-01'
    },
    {
      title: 'Smoothie Verde Energizante',
      description: 'Revitalízate con este smoothie verde lleno de nutrientes. Combina espinacas, plátano y otros ingredientes saludables para obtener una bebida refrescante que te dará energía para todo el día.',
      imageUrl: 'assets/VerdeEnergizante.jpg',
      date: '2024-07-31'
    },
    {
      title: 'Sopa de Calabaza Cremosa',
      description: 'Disfruta de una sopa de calabaza cremosa y reconfortante que es perfecta para los días fríos. Con una textura suave y un sabor dulce, esta sopa es fácil de preparar y ideal para una comida ligera.',
      imageUrl: 'assets/sopacalabaza.jpg',
      date: '2024-07-30'
    },
    {
      title: 'Brownies de Chocolate Decadentes',
      description: 'Endulza tu día con estos brownies de chocolate decadentes. Con una textura fudgy y un sabor intenso a chocolate, estos brownies son perfectos para cualquier amante del chocolate y una opción excelente para una merienda indulgente.',
      imageUrl: 'assets/brownie.jpg',
      date: '2024-07-29'
    },
    // Agrega más noticias aquí
  ];
  
  
}
