import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";

// Home component for displaying the list of books
const Home = () => {
  // State variables for books data, loading spinner, and display type (table or card)
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  // useEffect hook to fetch books data from the server when the component mounts
  useEffect(() => {
    // Set loading to true during the API request
    setLoading(true);

    // Make a GET request to retrieve the list of books
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        // Set the books state with the retrieved data and set loading to false
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        // Log the error and set loading to false if an error occurs
        console.log(error);
        setLoading(false);
      });
  }, []);

  // JSX structure for the Home component
  return (
    <div className="p-4">
      {/* Display buttons to switch between table and card view */}
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>

      {/* Display heading and add book button */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>

      {/* Display loading spinner or BooksTable/BooksCard based on showType */}
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
