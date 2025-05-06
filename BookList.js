import React from "react";
import API from "./api";

const BookList = ({ books, refresh }) => {
    const handleIssue = async (title) => {
        await API.post(`/issue/${title}`);
        refresh();
    };

    const handleReturn = async (title) => {
        await API.post(`/return/${title}`);
        refresh();
    };

    return (
        <ul>
            {books.map((book, i) => (
                <li key={i}>
                    <strong>{book.title}</strong> by {book.author} —{" "}
                    {book.issued ? "Issued" : "Available"}
                    <button onClick={() => (book.issued ? handleReturn(book.title) : handleIssue(book.title))}>
                        {book.issued ? "Return" : "Issue"}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default BookList;
