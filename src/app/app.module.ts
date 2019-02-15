import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { AppCommonsModule } from './app-commons/app-commons.module';
import { ChangeBgColorDirective } from './change-bg-color.directive';
import { PropertyService } from './property.service';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    ChangeBgColorDirective
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AppCommonsModule
  ],
  providers: [PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
