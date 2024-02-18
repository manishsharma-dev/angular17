import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import("./features/layout/layout.component").then((c) => c.LayoutComponent),
        canActivate: [authGuard]
    },
    {
        path: 'login',
        loadComponent: () => import("./auth/login/login.component").then((c) => c.LoginComponent)
    }
];
