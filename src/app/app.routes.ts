import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path:'',
        loadChildren:()=> import('./recipe/recipe.routes').then(m => m.RECIPE_ROUTES)
    },
    {
        path:'recipe',
        loadChildren:()=> import('./recipe/recipe.routes').then(m => m.RECIPE_ROUTES)
    },
    {
        path:'admin',
        loadChildren:()=> import('./admin/admin.routes').then(m => m.ADMIN_ROUTES)
    },
    {
        path:'auth',
        loadChildren:()=> import('./auth/auth.routes').then(m => m.AUTH_ROUTES)
    }
];
