import {Injectable} from '@angular/core';
import {Book} from './book.model';
import {from, Observable} from 'rxjs';

@Injectable()
export class StaticDataSource
{
    private books: Book[] = 
    [
        new Book(1, 'Book 1', 'Author 1', 'Year 1', 'Short Description 1', 10),
        new Book(2, 'Book 2', 'Author 1', 'Year 2', 'Short Description 2', 11),
        new Book(3, 'Book 3', 'Author 3', 'Year 3', 'Short Description 3', 12),
        new Book(4, 'Book 4', 'Author 3', 'Year 4', 'Short Description 4', 13),
        new Book(5, 'Book 5', 'Author 5', 'Year 5', 'Short Description 5', 14),
        new Book(6, 'Book 6', 'Author 5', 'Year 6', 'Short Description 6', 15),
        new Book(7, 'Book 7', 'Author 7', 'Year 7', 'Short Description 7', 16),
        new Book(8, 'Book 8', 'Author 8', 'Year 8', 'Short Description 8', 17)
    ];

    getBooks(): Observable<Book[]>
    {
        return from([this.books]);
    }
}