import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BookModule } from '../model/model.module';
import { BookStoreComponent } from '../book-store/book-store.component';
import { CounterDirective } from './counter.directive';


@NgModule({
    imports: [BookModule, BrowserModule, FormsModule],
    declarations: [BookStoreComponent, CounterDirective],
    exports: [BookStoreComponent, CounterDirective]
})
export class BookStoreModule {}