import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

// EditBook component for editing book information
const EditBook = () => {
  // State variables for book information and loading spinner
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);

  // React Router hooks for navigation and retrieving URL parameters
  const navigate = useNavigate();
  const { id } = useParams();

  // Notistack hook for displaying snackbars
  const { enqueueSnackbar } = useSnackbar();

  // Fetch book details from the server when the component mounts
  useEffect(() => {
    // Set loading to true during the API request
    setLoading(true);

    // Make a GET request to retrieve the book details using the provided ID
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        // Set state variables with the retrieved book details
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setTitle(response.data.title);
        // Set loading to false after successful data retrieval
        setLoading(false);
      })
      .catch((error) => {
        // Set loading to false and log the error if an error occurs
        setLoading(false);
        alert("An error happened. Please Check console");
        console.log(error);
      });
  }, []);

  // Function to handle editing a book
  const handleEditBook = () => {
    // Prepare data with the updated book information
    const data = {
      title,
      author,
      publishYear,
    };

    // Set loading to true during the API request
    setLoading(true);

    // Make a PUT request to update the book information using the provided ID
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        // Set loading to false after successful update
        setLoading(false);
        // Show success snackbar, and navigate to the home page
        enqueueSnackbar("Book Edited successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        // Set loading to false, show error snackbar, and log the error if an error occurs
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  // JSX structure for the EditBook component
  return (
    <div className="p-4">
      {/* BackButton component for navigating back */}
      <BackButton />
      <h1 className="text-3xl my-4">Edit Book</h1>
      {/* Display a loading spinner if loading is true */}
      {loading ? <Spinner /> : ""}
      {/* Form for editing book information */}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full rounded"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full rounded"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full rounded"
          />
        </div>
        {/* Button to save the edited book information */}
        <button className="p-2 bg-sky-300 m-8 rounded" onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditBook;
