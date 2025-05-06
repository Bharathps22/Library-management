package com.example.library.controller;

import com.example.library.model.Book;
import com.example.library.service.BookService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/books")
public class BookController {

    private final BookService service;

    public BookController(BookService service) {
        this.service = service;
    }

    @GetMapping
    public List<Book> getAllBooks() {
        return service.getAllBooks();
    }

    @PostMapping
    public String addBook(@RequestBody Book book) {
        service.addBook(book);
        return "Book added successfully!";
    }

    @PostMapping("/issue/{title}")
    public String issueBook(@PathVariable String title) {
        return service.issueBook(title) ? "Book issued successfully!" : "Book not found or already issued.";
    }

    @PostMapping("/return/{title}")
    public String returnBook(@PathVariable String title) {
        return service.returnBook(title) ? "Book returned successfully!" : "Book not found or not issued.";
    }
}
