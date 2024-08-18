import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public menuList: MenuItem[] = [
    {
      name: 'Главная',
      link: '',
    },
    {
      name: 'О нас',
      link: 'about',
    },
    {
      name: 'Связаться ос мной',
      link: 'contact',
    },
  ];
}
