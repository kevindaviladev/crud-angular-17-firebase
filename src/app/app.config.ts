import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideClientHydration(),
    importProvidersFrom([
      provideFirebaseApp(() =>
        initializeApp({
          apiKey: 'AIzaSyAwIHuIW8CSzNwPuyhkN6Oj5S2Rxa0BDWY',
          authDomain: 'crud-17-demo.firebaseapp.com',
          projectId: 'crud-17-demo',
          storageBucket: 'crud-17-demo.appspot.com',
          messagingSenderId: '125592525308',
          appId: '1:125592525308:web:267ec87590d6e38424ba79',
        })
      ),
      provideFirestore(() => getFirestore()),
    ]),
  ],
};
