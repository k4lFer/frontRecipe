import { Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';

export const RECIPE_ROUTES: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'    },
    {
        path:'catalogue',component:CatalogueComponent
    },
    {
        path:'home',component:HomeComponent
    },
    {
        path:'news',component:NewsComponent
    },
    {
        path: '**', redirectTo: 'home' 
      }
];