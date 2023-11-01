import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

// CreateBooks component for creating a new book
const CreateBooks = () => {
  // State variables for book details
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");

  // State variable for loading spinner
  const [loading, setLoading] = useState(false);

  // React Router hook for navigation
  const navigate = useNavigate();

  // Notistack hook for displaying snackbars
  const { enqueueSnackbar } = useSnackbar();

  // Function to handle saving a new book
  const handleSaveBook = () => {
    // Prepare data object with book details
    const data = {
      title,
      author,
      publishYear,
    };

    // Set loading to true during the API request
    setLoading(true);

    // Make a POST request to create a new book
    axios
      .post("http://localhost:5555/books", data)
      .then(() => {
        // If successful, set loading to false, show success snackbar, and navigate to home page
        setLoading(false);
        enqueueSnackbar("Book Created successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        // If an error occurs, set loading to false, show error snackbar, and log the error
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  // JSX structure for the CreateBooks component
  return (
    <div className="p-4">
      {/* BackButton component for navigating back */}
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>
      {/* Display a loading spinner if loading is true */}
      {loading ? <Spinner /> : ""}
      {/* Form for entering book details */}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        {/* Input for book title */}
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full rounded"
          />
        </div>
        {/* Input for book author */}
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full rounded"
          />
        </div>
        {/* Input for book publish year */}
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full rounded"
          />
        </div>
        {/* Button to save the new book */}
        <button className="p-2 bg-sky-300 m-8 rounded" onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBooks;
