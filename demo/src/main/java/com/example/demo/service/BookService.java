package com.example.demo.service;

import com.example.demo.model.Book;
import com.example.demo.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@Service
@Transactional
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    public List<Book> listAllBook() {
        return bookRepository.findAll();
    }

    public List<String> listAllNameBook() {
        List<Book> list = bookRepository.findAll();
        return list.stream().map(Book::getNom).collect(Collectors.toList());
    }
}
