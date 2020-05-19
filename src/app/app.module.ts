import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { RepresentativeProductsComponent } from './index/representative-products/representative-products.component';
import { NewProductsComponent } from './index/new-products/new-products.component';
import { MenuBarComponent } from './header/menu-bar/menu-bar.component';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HeaderEndComponent } from './index/header-end/header-end.component';
import { CartComponent } from './header/cart/cart.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule,
  RouterModule.forRoot([
    {path: '', component: IndexComponent}
  ]) ],
  declarations: [ AppComponent, HeaderComponent, HeaderEndComponent, FooterComponent, NewsletterComponent, RepresentativeProductsComponent, NewProductsComponent, MenuBarComponent, IndexComponent, CartComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
