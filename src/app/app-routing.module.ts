import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    pathMatch: 'full',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
    data: {
      title: 'Главаня страница',
      description: 'Главная страница сайта',
      ogTitle: 'Главная страница',
      ogDescription: 'lorem ipsum dolar emet',
      ogImage: 'https://placehold.co/600x400',
    },
  },
  {
    path: 'about',
    pathMatch: 'full',
    loadChildren: () => import('./pages/about/about.module').then((m) => m.AboutModule),
    data: {
      title: 'О нас',
      description: 'Страница О нас',
      keywords: 'о нас',
    },
  },
  {
    path: 'contact',
    pathMatch: 'full',
    loadChildren: () => import('./pages/contact/contact.module').then((m) => m.ContactModule),
    data: {
      title: 'Связаться со мной',
      description: 'Страница обратной связти',
      keywords: 'contact',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
