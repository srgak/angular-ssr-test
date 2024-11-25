import { isPlatformBrowser } from "@angular/common";
import { inject, InjectionToken, PLATFORM_ID } from "@angular/core";

export const IS_BROWSER = new InjectionToken<boolean>('Это браузер?', {
  factory: () => {
    const platformId = inject(PLATFORM_ID);

    return isPlatformBrowser(platformId);
  }
});