import React, { useEffect, useState } from "react";
import API from "./api";
import BookForm from "./BookForm";
import BookList from "./BookList";

const App = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await API.get("/");
    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
      <div style={{ padding: "1rem" }}>
        <h1>Library Management</h1>
        <BookForm onAdd={fetchBooks} />
        <BookList books={books} refresh={fetchBooks} />
      </div>
  );
};

export default App;
