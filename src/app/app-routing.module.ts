import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { articleListResolver, menuResolver } from './resolvers';

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
    },
    resolve: {
      menu: menuResolver,
      articles: articleListResolver,
    },
  },
  {
    path: 'articles',
    loadChildren: () => import('./pages/articles/articles.module').then((m) => m.ArticlesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
