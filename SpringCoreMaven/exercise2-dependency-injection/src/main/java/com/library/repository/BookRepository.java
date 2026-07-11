package com.library.repository;

public class BookRepository {

    public void save(String bookTitle) {
        System.out.println("BookRepository: Saved book -> " + bookTitle);
    }

    public String find(String bookTitle) {
        return "BookRepository: Found book -> " + bookTitle;
    }
}
