package com.library.repository;

public class BookRepository {

    public BookRepository() {
        System.out.println("BookRepository bean created.");
    }

    public void save(String bookTitle) {
        System.out.println("BookRepository: Saved book -> " + bookTitle);
    }
}
