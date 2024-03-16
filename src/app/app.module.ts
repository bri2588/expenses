import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {AngularFireModule } from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCMo1AUFvbhT8oBWtBZqa0h2ZJ4HOlojsw",
      authDomain: "virtual-store-db2b7.firebaseapp.com",
      projectId: "virtual-store-db2b7",
      storageBucket: "virtual-store-db2b7.appspot.com",
      messagingSenderId: "873856876620",
      appId: "1:873856876620:web:b0f4f68cc18d74eaf834e9",
      measurementId: "G-75J69H6Y2C"
    }),
    AngularFireAuthModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
