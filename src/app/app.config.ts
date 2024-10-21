import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"taller-inventario","appId":"1:1020201756185:web:e0b26bf598daae00556c88","storageBucket":"taller-inventario.appspot.com","apiKey":"AIzaSyDDRfuPiu8ozCrBTqx5QoBx7hoN6rsLKqE","authDomain":"taller-inventario.firebaseapp.com","messagingSenderId":"1020201756185"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage())]
};
