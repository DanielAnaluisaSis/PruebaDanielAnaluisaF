import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GifsDAModule } from './gifs-da/gifs-da.module';
import { PaisesDAModule } from './paises-da/paises-da.module';
import { SidebarComponent } from './shared/sidebar/sidebar.component';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GifsDAModule,
    PaisesDAModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
