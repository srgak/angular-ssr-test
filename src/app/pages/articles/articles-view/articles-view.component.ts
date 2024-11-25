import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { map, shareReplay } from 'rxjs';
import { ArticleItem } from '../../../interfaces/articles';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-articles-view',
  templateUrl: './articles-view.component.html',
  styleUrl: './articles-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MarkdownModule, CommonModule, RouterModule],
})
export class ArticlesViewComponent {
  @ViewChild('testRef') public testRef!: ElementRef<HTMLElement>;

  public article = this.activatedRoute.data.pipe(
    map((data) => data['article'] as ArticleItem),
    shareReplay(),
  );

  constructor(private readonly activatedRoute: ActivatedRoute) {}
}
