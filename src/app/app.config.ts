import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { definePreset } from "@primeng/themes";

import { routes } from './app.routes';

const preset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#f2f9fb',
      100: '#c2e3ea',
      200: '#91ceda',
      300: '#61b8c9',
      400: '#30a2b9',
      500: '#008ca8',
      600: '#00778f',
      700: '#006276',
      800: '#004d5c',
      900: '#003843',
    },
    overlay: {
      popover: {
        background: "#f9fafb",
        borderColor: "#e5e7eb",
        color: "#1f2937",
        padding: "0.5rem 0.75rem",
        borderRadius: "0.375rem",
        shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
      }
    }
  }
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: preset
      }
    })

  ]
};
