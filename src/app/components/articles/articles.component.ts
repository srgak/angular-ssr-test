import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ArticleItem } from '../../interfaces/articles';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesComponent {
  @Input() public articleList!: ArticleItem[];
}
