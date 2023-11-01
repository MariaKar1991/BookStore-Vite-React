import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

// DeleteBook component for deleting a book
const DeleteBook = () => {
  // State variable for loading spinner
  const [loading, setLoading] = useState(false);

  // React Router hooks for navigation and retrieving URL parameters
  const navigate = useNavigate();
  const { id } = useParams();

  // Notistack hook for displaying snackbars
  const { enqueueSnackbar } = useSnackbar();

  // Function to handle deleting a book
  const handleDeleteBook = () => {
    // Set loading to true during the API request
    setLoading(true);

    // Make a DELETE request to delete the book with the specified ID
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        // If successful, set loading to false, show success snackbar, and navigate to home page
        setLoading(false);
        enqueueSnackbar("Book Deleted successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        // If an error occurs, set loading to false, show error snackbar, and log the error
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  // JSX structure for the DeleteBook component
  return (
    <div className="p-4">
      {/* BackButton component for navigating back */}
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {/* Display a loading spinner if loading is true */}
      {loading ? <Spinner /> : ""}
      {/* Confirmation message and button to delete the book */}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are You Sure You want to delete this book?</h3>
        <button
          className="p-4 bg-red-600 text-white m-8 w-full rounded"
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;

