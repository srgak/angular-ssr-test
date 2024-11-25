import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles.component';
import { NgModule } from '@angular/core';
import { ArticlesViewComponent } from './articles-view/articles-view.component';
import { articleResolver } from '../../resolvers/article.resolver';
import { ArticleCreateComponent } from './article-create/article-create.component';

const routes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
  },
  {
    path: 'create',
    component: ArticleCreateComponent,
  },
  {
    path: 'edit',
    component: ArticleCreateComponent,
  },
  {
    path: ':id',
    component: ArticlesViewComponent,
    resolve: {
      article: articleResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesRoutingModule {}
