import { afterNextRender, ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ArticleItem } from '../../../interfaces/articles';
import { API_URL, WINDOW } from '../../../tokens';
import { ArticlesHttpService } from '../../../services';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrl: './article-create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class ArticleCreateComponent {
  public form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    text: new FormControl('', [Validators.required]),
  });
  public articleRefactorType: 'create' | 'edit' =
    (this.window.location.pathname.split('/') as ['create' | 'edit']).at(-1) ?? 'create';

  constructor(
    @Inject(API_URL) public readonly apiUrl: string,
    @Inject(WINDOW) private readonly window: Window,
    private readonly articlesHttpService: ArticlesHttpService,
  ) {
    afterNextRender(() => {
      const localData = window.localStorage.getItem('articleDraft');
      const savedData = localData ? JSON.parse(localData) : null;
      const passedData = window.history.state['data'];

      if (savedData) {
        this.form.patchValue(savedData, {
          emitEvent: false,
        });
      } else if (passedData) {
        this.form.patchValue(passedData, {
          emitEvent: false,
        });
      }
    });

    this.form.valueChanges.pipe(debounceTime(1000)).subscribe((value) => {
      window.localStorage.setItem('articleDraft', JSON.stringify(value));
    });
  }

  public handleSubmit(): void {
    this.articlesHttpService.createArticle(this.form.value as ArticleItem).subscribe(() => {
      this.window.localStorage.removeItem('articleDraft');
    });
  }
}
