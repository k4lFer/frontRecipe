import { Routes } from '@angular/router';
import { HeaderAComponent } from './header-a/header-a.component';
import { RecipeComponent } from './recipe/recipe.component';
import { UserComponent } from './user/user.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { Component } from '@angular/core';
import { loggedGuard } from '../core/guards/logged.guard';

export const ADMIN_ROUTES: Routes = [
    {
        path:'',component:AdminLayoutComponent, children : [
            {
                path:'',component:UserComponent
            },
            {
                path:'user',component:UserComponent
            },
            {
                path:'recipe',component:RecipeComponent
            },
          
        ]

        
    }

];