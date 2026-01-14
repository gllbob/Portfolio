import { Routes } from '@angular/router';
import { Home } from './view/home/home';
import { Sobre } from './view/sobre/sobre';
import { Contato } from './view/contato/contato';

export const routes: Routes = [
    {
        path: 'home',
        component: Home
    },
    {
        path: 'sobre',
        component: Sobre
    },
    {
        path: 'contato',
        component: Contato
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];
