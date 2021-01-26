import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



//Import Modules
import { AppRoutingModule } from './app-routing.module';
//Import Components
import { AppComponent } from './app.component';
import { BookStoreModule } from './book-store/book-store.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookStoreModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
