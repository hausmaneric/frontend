import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http'; // Keep this for HttpClient
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),  // Ensure HttpClient is available here
    importProvidersFrom(
      HttpClientModule,  // Include HttpClientModule here
      BrowserAnimationsModule
    ),
    provideRouter(routes),
  ]
});
