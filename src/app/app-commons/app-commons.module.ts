import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricePipe } from './pipes/price.pipe';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [PricePipe, HeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [PricePipe, HeaderComponent, FooterComponent]
})
export class AppCommonsModule { }
