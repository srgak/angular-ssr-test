import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticleItem } from '../interfaces/articles';
import { inject } from '@angular/core';
import { ArticlesHttpService } from '../services';

export const articleListResolver: ResolveFn<ArticleItem[]> = (): Observable<ArticleItem[]> => {
  const articleHttp = inject(ArticlesHttpService);

  return articleHttp.getArticles();
};
