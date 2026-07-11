package com.library.repository;

import java.util.ArrayList;
import java.util.List;

public class BookRepository {

    private final List<String> books = new ArrayList<>();

    public void save(String title) {
        books.add(title);
        System.out.println("BookRepository: Book stored -> " + title);
    }

    public List<String> findAll() {
        return books;
    }
}
