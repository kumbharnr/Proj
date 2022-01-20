import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SinglemenuComponent } from './pages/singlemenu/singlemenu.component';
import { HttpClientModule } from '@angular/common/http'
import { OrderDetailsService } from './services/order-details.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';
import { SearchPipe } from './searchpipe/search.pipe';
import { CartComponent } from './pages/cart/cart.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    SinglemenuComponent,
    LoginComponent,
    RegisterComponent,
    NoPageFoundComponent,
    SearchPipe,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [OrderDetailsService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
