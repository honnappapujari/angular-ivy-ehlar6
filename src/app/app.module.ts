import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  imports: [AppRoutingModule, BrowserModule, FormsModule, MatSlideToggleModule],
  declarations: [
    AppComponent,
    HelloComponent,
    FooterComponent,
    HeaderComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
