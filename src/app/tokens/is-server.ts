import { isPlatformServer } from "@angular/common";
import { inject, InjectionToken, PLATFORM_ID } from "@angular/core";

export const IS_SERVER = new InjectionToken<boolean>('Это сервер?', {
  factory: () => {
    const platformId = inject(PLATFORM_ID);

    return isPlatformServer(platformId);
  }
})