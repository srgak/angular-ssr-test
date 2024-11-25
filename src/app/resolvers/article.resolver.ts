import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { ArticleItem } from '../interfaces/articles';
import { Observable, tap } from 'rxjs';
import { inject } from '@angular/core';
import { ArticlesHttpService } from '../services';

export const articleResolver: ResolveFn<ArticleItem> = (
  route: ActivatedRouteSnapshot,
): Observable<ArticleItem> => {
  const articleHttp = inject(ArticlesHttpService);

  return articleHttp.getArticleById(route.paramMap.get('id')!);
};
