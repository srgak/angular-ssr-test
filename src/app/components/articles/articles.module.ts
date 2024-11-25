import { NgModule } from '@angular/core';
import { ArticlesComponent } from './articles.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ArticlesComponent],
  imports: [CommonModule, RouterModule],
  exports: [ArticlesComponent],
})
export class ArticlesModule {}
