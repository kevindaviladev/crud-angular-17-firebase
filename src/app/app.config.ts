import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideClientHydration(),
    importProvidersFrom([
      provideFirebaseApp(() =>
        initializeApp({
          apiKey: 'AIzaSyAwXVydEtvXtYhdfFHkUVyDw-7c3ODYt7s',
          authDomain: 'crud-angular-17-demo-test.firebaseapp.com',
          projectId: 'crud-angular-17-demo-test',
          storageBucket: 'crud-angular-17-demo-test.appspot.com',
          messagingSenderId: '364904854414',
          appId: '1:364904854414:web:d94424d33d777bf0f46adf',
        })
      ),
      provideFirestore(() => getFirestore()),
    ]),
  ],
};
