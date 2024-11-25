import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { MenuItem } from '../interfaces';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const menuResolver: ResolveFn<MenuItem[]> = (): Observable<MenuItem[]> => {
  const httpClient = inject(HttpClient);

  return httpClient.get<MenuItem[]>('http://localhost:3000/menu');
};
