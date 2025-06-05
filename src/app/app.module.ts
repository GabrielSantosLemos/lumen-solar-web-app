import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighchartsChartModule } from 'highcharts-angular';
import { TermosDeUsoComponent } from './pages/termos-de-uso/termos-de-uso.component';
import { PoliticaDePrivacidadeComponent } from './pages/politica-de-privacidade/politica-de-privacidade.component';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { APIInterceptor } from './http.interceptor';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import {
  NgxMaskDirective,
  NgxMaskPipe,
  provideEnvironmentNgxMask,
  provideNgxMask,
} from 'ngx-mask';
import { NgxCurrencyDirective } from 'ngx-currency';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    TermosDeUsoComponent,
    PoliticaDePrivacidadeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    NgbModule,
    HighchartsChartModule,
    HttpClientModule,
    NgxCurrencyDirective,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    provideNgxMask(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
