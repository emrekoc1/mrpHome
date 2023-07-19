import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MrpComponent } from './mrp/mrp.component';
import { SiparisComponent } from './siparis/siparis.component';
import { MakinaComponent } from './makina/makina.component';
import { MenuComponent } from './menu/menu.component';
import { SliderMenuComponent } from './slider-menu/slider-menu.component';
import { ProjeGoruntuComponent } from './proje-goruntu/proje-goruntu.component';

@NgModule({
  declarations: [
    AppComponent,
    MrpComponent,
    SiparisComponent,
    MakinaComponent,
    MenuComponent,
    SliderMenuComponent,
    ProjeGoruntuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
