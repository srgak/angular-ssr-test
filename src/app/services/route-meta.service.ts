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

  public setTitle(titleName: string): void {
    this.title.setTitle(titleName);
  }

  public setDescription(description: string): void {
    this.meta.updateTag({
      name: 'description',
      content: description,
    });
  }

  public setKeywords(key: string): void {
    this.meta.updateTag({
      name: 'keywords',
      content: key,
    });
  }

  public setOgTitle(titleName: string): void {
    this.meta.updateTag({
      property: 'og:title',
      content: titleName,
    });
  }

  public setOgDescription(description: string): void {
    this.meta.updateTag({
      property: 'description',
      content: description,
    });
  }

  public setOgImage(imageUrl: string): void {
    this.meta.updateTag({
      property: 'og:image',
      content: imageUrl,
    });
  }

  public setOgType(typeName: string): void {
    this.meta.updateTag({
      property: 'type',
      content: typeName,
    });
  }

  public setOgUrl(url: string): void {
    this.meta.updateTag({
      property: 'og:url',
      content: url,
    });
  }
}
