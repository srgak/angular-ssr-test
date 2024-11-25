import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DestroyService, RouteMetaService } from '../../services';
import { filter, map, Observable, switchMap, takeUntil } from 'rxjs';
import { PageMetaData } from '../../interfaces';
import { ArticleItem } from '../../interfaces/articles';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class HomeComponent {
  public articleList = this.activatedRoute.data.pipe(
    map((data) => data['articles'] as ArticleItem[]),
  );

  constructor(
    @Inject(DestroyService) destroy$: Observable<void>,
    router: Router,
    private readonly activatedRoute: ActivatedRoute,
    routeMeta: RouteMetaService,
  ) {
    router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        switchMap(() => activatedRoute.data),
        map((data) => data as PageMetaData),
        takeUntil(destroy$),
      )
      .subscribe(({ title, description, ogTitle, ogDescription }) => {
        title && routeMeta.setTitle(title);
        description && routeMeta.setDescription(description);
        ogTitle && routeMeta.setOgTitle(ogTitle);
        ogDescription && routeMeta.setOgDescription(ogDescription);
      });
  }
}
