import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { HeaderComponent } from '../header/header.component';
import { Recipe } from '../../core/models/recipe';
import { CommonModule } from '@angular/common';
import { ComentsComponent } from './../coments/coments.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [HeaderComponent, CommonModule, ComentsComponent],
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
  animations: [
    trigger('fadeInOutAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(20px)' }))
      ])
    ])
  ]
})
export class CatalogueComponent {
  recipes: Recipe[] = [
    {
        name: 'Flan Maracuya',
        image: './assets/maracuya.jpg',
        video: './assets/video/maracuya.mp4',
        category: 'desserts',
        ingredients: '-o Leche 1 litro -o Azúcar 200g -o Huevos 4 -o Maracuyá 200g -o Vainilla 1 cucharadita',
        procedure: '->> Precalentar el horno a 180°C. Preparar un molde para flan con caramelo. Para hacer el caramelo, calentar 100g de azúcar en una sartén a fuego medio hasta que se derrita y adquiera un color dorado. Verter el caramelo en el molde y dejar enfriar. ->> En un bol grande, batir los huevos y agregar el azúcar restante. Mezclar bien hasta que el azúcar se disuelva. ->> Incorporar la leche, el maracuyá y la vainilla a la mezcla de huevos, batiendo bien para combinar todos los ingredientes. ->> Verter la mezcla en el molde caramelizado. ->> Colocar el molde en una bandeja para hornear y agregar agua caliente a la bandeja, suficiente para llegar a la mitad del molde (esto crea un baño maría). ->> Hornear durante aproximadamente 45 minutos o hasta que el flan esté firme al tacto y un palillo insertado en el centro salga limpio. ->> Retirar del horno y dejar enfriar completamente a temperatura ambiente. ->> Refrigerar por al menos 4 horas antes de desmoldar. Para desmoldar, pasar un cuchillo alrededor de los bordes del flan y volcarlo cuidadosamente en un plato.',
        videocompleto:'https://www.youtube.com/watch?v=2PGAxWUwVH4'
      },
    {
        name: 'Lomo Saltado',
        image: './assets/lomito.jpg',
        video: './assets/video/lomo.mp4',
        category: 'main',
        ingredients: '-o Lomo de res 500g -o Papas 2 grandes -o Tomates 2 medianos -o Cebolla 1 grande -o Ají amarillo 1 -o Salsa de soja 3 cucharadas -o Ajo 2 dientes -o Sal y pimienta al gusto -o Aceite vegetal 2 cucharadas',
        procedure: '->> Cortar el lomo en tiras de aproximadamente 1 cm de ancho. ->> Pelar las papas y cortarlas en bastones. Calentar suficiente aceite en una sartén grande y freír las papas hasta que estén doradas y crujientes. Sacar y escurrir sobre papel absorbente. ->> En la misma sartén, calentar 2 cucharadas de aceite vegetal. Añadir las tiras de lomo y cocinar a fuego alto hasta que estén doradas por todos lados. Retirar el lomo de la sartén y reservar. ->> En la misma sartén, añadir un poco más de aceite si es necesario. Sofreír la cebolla y el ajo picados hasta que estén dorados y fragantes. ->> Agregar el tomate cortado en gajos y el ají amarillo picado. Cocinar durante unos minutos hasta que los tomates se ablanden. ->> Volver a añadir el lomo a la sartén junto con las papas fritas. ->> Incorporar la salsa de soja y mezclar bien todos los ingredientes. Cocinar por unos 5 minutos más, asegurándose de que todos los sabores se integren. ->> Ajustar la sazón con sal y pimienta al gusto. ->> Servir caliente acompañado de arroz blanco o como prefieras.',
        videocompleto:'https://www.youtube.com/watch?v=JgL-jKDajHc'
      },
    {
        name: 'Sopa de Arroz de sevada',
        image: './assets/caldo1.jpg',
        video: './assets/video/caldo.mp4',
        category: 'starters',
        ingredients: '-o Fideos 200g -0 Pollo 300g -o Zanahoria 2 medianas -o Papa 2 medianas -o Cebolla 1 grande -o Ajo 2 dientes -o Caldo de pollo 1 litro -o Sal y pimienta al gusto -o Aceite vegetal 2 cucharadas',
        procedure: '->> En una olla grande, calentar el aceite a fuego medio. Añadir la cebolla y el ajo picados, y cocinar hasta que estén dorados y fragantes. ->> Agregar el pollo en trozos y dorar por todos lados. ->> Añadir el caldo de pollo y llevar a ebullición. Reducir el fuego y dejar cocinar a fuego lento durante unos 20 minutos, o hasta que el pollo esté cocido y tierno. ->> Retirar el pollo de la olla y desmenuzarlo. ->> Mientras tanto, pelar y cortar las zanahorias y las papas en cubos pequeños. Añadir estos vegetales al caldo y cocinar hasta que estén tiernos, aproximadamente 15 minutos. ->> Agregar los fideos y el pollo desmenuzado al caldo. Cocinar por 10 minutos más, o hasta que los fideos estén cocidos. ->> Ajustar la sazón con sal y pimienta al gusto. ->> Servir caliente, decorado con perejil picado si lo deseas.',
        videocompleto:'https://www.youtube.com/watch?v=FYPx-BAMJ_I'
      },
    {
        name: 'Chaufa',
        image: './assets/chaufa.jpg',
        video: './assets/video/chaufa.mp4',
        category: 'main',
        ingredients: '-o Arroz 2 tazas -o Pollo 300g -o Cebolla 1 grande -o Zanahoria 1 grande -o Huevo 2 -o Salsa de soja 3 cucharadas -o Aceite de sésamo 2 cucharadas -o Sal y pimienta al gusto -o Cebollín 2 ramas (opcional)',
        procedure: '->> Cocinar el arroz según las instrucciones del paquete. Es ideal usar arroz que haya sido cocido con anticipación y refrigerado, ya que esto ayuda a que el arroz se separe mejor al freír. ->> En una sartén grande o wok, calentar el aceite de sésamo a fuego medio-alto. ->> Añadir el pollo en tiras y cocinar hasta que esté dorado y bien cocido. Retirar el pollo de la sartén y reservar. ->> En la misma sartén, añadir un poco más de aceite si es necesario. Saltear la cebolla picada y la zanahoria en cubos pequeños hasta que estén tiernas. ->> Hacer un espacio en el centro de la sartén y añadir los huevos batidos. Revolver para cocinarlos y mezclarlos con las verduras. ->> Añadir el arroz frío y el pollo reservado. Mezclar bien todos los ingredientes. ->> Agregar la salsa de soja y cocinar, removiendo constantemente, hasta que el arroz esté caliente y bien mezclado con los demás ingredientes. ->> Ajustar la sazón con sal y pimienta al gusto. ->>. Servir caliente, decorado con cebollín picado si lo deseas.',
        videocompleto:'https://www.youtube.com/watch?v=OVEWGwyuCCY'
      },
    {
        name: 'Fetuchini',
        image: './assets/fetuchini.jpg',
        video: './assets/video/fetuchini.mp4',
        category: 'main',
        ingredients: '-o Fetuccini 250g -o Salsa Alfredo 300ml -o Pollo 300g -o Champiñones 150g -o Ajo 2 dientes -o Aceite de oliva 2 cucharadas -o Sal y pimienta al gusto -o Queso parmesano rallado 50g (opcional)',
        procedure: '->> Cocinar el fetuccini en una olla con agua salada hirviendo según las instrucciones del paquete. Escurrir y reservar. ->> En una sartén grande, calentar el aceite de oliva a fuego medio. ->> Añadir el ajo picado y saltear hasta que esté dorado y fragante. ->> Agregar el pollo en tiras y cocinar hasta que esté dorado y completamente cocido. ->> Añadir los champiñones en láminas y cocinar hasta que se ablanden y se doren ligeramente. ->> Verter la salsa Alfredo en la sartén y mezclar bien. Calentar a fuego lento hasta que la salsa esté caliente. ->> Incorporar el fetuccini cocido y mezclar bien para que el pasta se cubra con la salsa. ->> Ajustar la sazón con sal y pimienta al gusto. ->> Servir caliente, espolvoreado con queso parmesano rallado si lo deseas.',
        videocompleto:'https://www.youtube.com/watch?v=xmv3WJZIxeY'
      },
    {
        name: 'Causa',
        image: './assets/causa1.jpg',
        video: './assets/video/causa.mp4',
        category: 'main',
        ingredients: '-o Papa amarilla 1kg -o Atún 200g -o Mayonesa 100g -o Limón 1 -o Ají amarillo 1 -o Sal y pimienta al gusto -o Aceitunas negras 100g -o Huevos 2',
        procedure: '->>  Hervir las papas en una olla con agua y sal hasta que estén tiernas, aproximadamente 20 minutos. Escurrir y dejar enfriar un poco. ->> Pelar las papas y hacer un puré en un bol grande. Añadir el ají amarillo en pasta, sal, pimienta y jugo de limón al gusto. ->> Mezclar bien hasta obtener una masa uniforme.',
        videocompleto:'https://www.youtube.com/watch?v=C4I6ZEk0ivM'
      }]
  filteredRecipes: Recipe[] = [];
  selectedRecipe: Recipe | null = null;
  showModal: boolean = false;
  
  constructor(public sanitizer: DomSanitizer) {}

  filterRecipes(category: string): void {
    // Agregar la clase hidden a las tarjetas actuales
    const cards = document.querySelectorAll('.recipe-card');
    cards.forEach(card => (card as HTMLElement).classList.add('hidden'));
  
    setTimeout(() => {
      // Cambiar las recetas después de que la animación de salida haya terminado
      this.filteredRecipes = category === 'all' ? this.recipes : this.recipes.filter(recipe => recipe.category === category);
  
      // Eliminar la clase hidden de las nuevas tarjetas
      const newCards = document.querySelectorAll('.recipe-card');
      newCards.forEach(card => (card as HTMLElement).classList.remove('hidden'));
    }, 300); // El tiempo debe coincidir con la duración de la animación de salida
  }
  getSafeVideoUrl(url?: string): SafeResourceUrl | null {
    if (!url) return null;
    const embedUrl = this.convertToEmbedUrl(url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }
  showVideo(recipe: Recipe): void {
    recipe.showVideo = true;
  }
  convertToEmbedUrl(url: string): string {
    const videoId = url.split('v=')[1];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  hideVideo(recipe: Recipe): void {
    recipe.showVideo = false;
  }

  openModal(recipe: Recipe): void {
    this.selectedRecipe = recipe;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedRecipe = null;
  }

  toggleFavorite(recipe: any, event: Event) {
    event.stopPropagation(); // Evitar que se dispare el evento click del card
    recipe.isFavorite = !recipe.isFavorite;
  }
  private preloadImage(url: string): void {
    if (typeof window !== 'undefined') { // Verifica si estamos en el entorno del navegador
      const img = new Image();
      img.src = url;
    }
  }
  
  ngOnInit(): void {
    if (typeof window !== 'undefined') { // Verifica si estamos en el entorno del navegador
      this.recipes.forEach(recipe => this.preloadImage(recipe.image));
    }
    this.filteredRecipes = this.recipes;
  }
  formatText(text: string): string {
    return text.replace(/-/g, '\n');
  }
  
  
}