package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String title) {
        try {
            Thread.sleep(200); // simulate work
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        bookRepository.save(title);
    }
}
