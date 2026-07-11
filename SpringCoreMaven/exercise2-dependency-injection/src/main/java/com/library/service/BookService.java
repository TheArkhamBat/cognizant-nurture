package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    // Setter injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("BookRepository injected into BookService via setter.");
    }

    public void addBook(String title) {
        bookRepository.save(title);
    }

    public void searchBook(String title) {
        System.out.println(bookRepository.find(title));
    }
}
