import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { API_URL } from '../tokens';
import { ArticleItem } from '../interfaces/articles';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ArticlesHttpService {
  constructor(
    @Inject(API_URL) private readonly apiUrl: string,
    private readonly httpClient: HttpClient,
  ) {}

  public getArticles(): Observable<ArticleItem[]> {
    return this.httpClient.get<ArticleItem[]>(`${this.apiUrl}articles`);
  }

  public getArticleById(id: string): Observable<ArticleItem> {
    return this.httpClient
      .get<ArticleItem[]>(`${this.apiUrl}articles`)
      .pipe(map((data) => data.find((item) => item.id === id) as ArticleItem));
  }

  public createArticle(data: ArticleItem): Observable<unknown> {
    return this.httpClient.post<ArticleItem>(`${this.apiUrl}articles/`, data);
  }

  // public editArticle(data: ArticleItem): Observable<unknown> {}
}
