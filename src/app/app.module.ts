import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenetHeaderComponent } from './header/componenet-header/componenet-header.component';
import { ComponentFooterComponent } from './footer/component-footer/component-footer.component';
import { ComponentHomeComponent } from './home/component-home/component-home.component';
import { ComponentListaComponent } from './lista/component-lista/component-lista.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ListaComponent } from './lista/lista/lista.component';

import { CervejaServiceService } from './service/cerveja--service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ComponenetHeaderComponent,
    ComponentFooterComponent,
    ComponentHomeComponent,
    ComponentListaComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [CervejaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
