import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBooks from "./pages/CreateBooks";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";

// Main App component defining the application routes
const App = () => {
  return (
    <Routes>
      {/* Route for the home page */}
      <Route path="/" element={<Home />} />

      {/* Route for creating books */}
      <Route path="/books/create" element={<CreateBooks />} />

      {/* Route for displaying book details */}
      <Route path="/books/details/:id" element={<ShowBook />} />

      {/* Route for editing book information */}
      <Route path="/books/edit/:id" element={<EditBook />} />

      {/* Route for deleting a book */}
      <Route path="/books/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
};

export default App;
