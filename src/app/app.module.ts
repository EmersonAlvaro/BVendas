import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SlideshowComponent } from './slideshow/slideshow.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, MatIconModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, FooterComponent, SlideshowComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
