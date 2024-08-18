import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { RouteMetaService } from '../../services';
import { filter, map, switchMap } from 'rxjs';
import { PageMetaData } from '../../interfaces';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  constructor(router: Router, activatedRoute: ActivatedRoute, routeMeta: RouteMetaService) {
    router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        switchMap(() => activatedRoute.data),
        map((data) => data as PageMetaData),
      )
      .subscribe(({ title, description, ogTitle, ogDescription, ogImage }) => {
        title && routeMeta.updateTitle(title);
        description && routeMeta.updateDescription(description);
        ogTitle && routeMeta.updateOgTitle(ogTitle);
        ogDescription && routeMeta.updateOgDescription(ogDescription);
        ogImage && routeMeta.updateOgImage(ogImage);
      });
  }
}
