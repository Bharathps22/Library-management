import React, { useState } from "react";
import API from "./api";

const BookForm = ({ onAdd }) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !author) return;

        await API.post("/", { title, author });
        onAdd();
        setTitle("");
        setAuthor("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
            />
            <button type="submit">Add Book</button>
        </form>
    );
};

export default BookForm;
