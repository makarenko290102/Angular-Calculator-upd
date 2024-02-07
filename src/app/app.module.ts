import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorModule } from './calculator.module';
import { Navigation } from './components/navigation/navigation.component';
import { EmptyPage } from './components/empty-route/empty-route.component';
import { HomePage } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    Navigation,
    EmptyPage,
    HomePage

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalculatorModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
