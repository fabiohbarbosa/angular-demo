import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { ChangeBgColorDirective } from '@directives/change-bg-color.directive';
import { PropertyService } from '@providers/property.service';

import { AppComponent } from './app.component';
import { PropertyListComponent } from '@components/property/property-list.component';
import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component';
import { NavigationComponent } from '@components/navigation/navigation.component';

import { PricePipe } from '@pipes/price.pipe';
import { PageNotFoundComponent } from '@components/page-not-found/page-not-found.component';
import { HttpClientInterceptor } from '@providers/interceptors/http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PropertyListComponent,
    PricePipe,
    ChangeBgColorDirective,
    NavigationComponent,
    PageNotFoundComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    PropertyService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpClientInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
