import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class RouteMetaService {
  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  public updateTitle(titleName: string): void {
    this.title.setTitle(titleName);
  }

  public updateDescription(description: string): void {
    this.meta.updateTag({
      name: 'description',
      content: description,
    });
  }

  public updateKeywords(key: string): void {
    this.meta.updateTag({
      name: 'keywords',
      content: key,
    });
  }

  public updateOgTitle(titleName: string): void {
    this.meta.updateTag({
      property: 'og:title',
      content: titleName,
    });
  }

  public updateOgDescription(description: string): void {
    this.meta.updateTag({
      property: 'description',
      content: description,
    });
  }

  public updateOgImage(imageUrl: string): void {
    this.meta.updateTag({
      property: 'og:image',
      content: imageUrl,
    });
  }

  public updateOgType(typeName: string): void {
    this.meta.updateTag({
      property: 'type',
      content: typeName,
    });
  }

  public updateOgUrl(url: string): void {
    this.meta.updateTag({
      property: 'og:url',
      content: url,
    });
  }
}
