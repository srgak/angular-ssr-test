import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MenuItem } from '../../interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  @Input() public list!: MenuItem[];
}
