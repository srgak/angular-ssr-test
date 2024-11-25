import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MenuItem } from './interfaces';
import { API_URL, IS_BROWSER, IS_SERVER } from './tokens';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public menuList = this.httpClient.get<MenuItem[]>(`${this.apiUrl}menu`);

  constructor(
    @Inject(IS_BROWSER) isBrowser: boolean,
    @Inject(IS_SERVER) isServer: boolean,
    @Inject(API_URL) private readonly apiUrl: string,
    private readonly httpClient: HttpClient,
  ) {
    console.log('Это браузер?', isBrowser);
    console.log('Это сервер?', isServer);
  }
}
