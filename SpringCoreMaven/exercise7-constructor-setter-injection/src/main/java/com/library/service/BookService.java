package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private final BookRepository bookRepository; // constructor-injected (mandatory)
    private String libraryName;                  // setter-injected (optional)

    // Constructor injection
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("BookRepository injected via constructor.");
    }

    // Setter injection
    public void setLibraryName(String libraryName) {
        this.libraryName = libraryName;
        System.out.println("Library name injected via setter: " + libraryName);
    }

    public void addBook(String title) {
        System.out.println("[" + libraryName + "] adding book...");
        bookRepository.save(title);
    }
}
