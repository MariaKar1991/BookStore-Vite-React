import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

// BackButton component for creating a back navigation button
const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex">
      {/* Link component for navigation with a back arrow icon */}
      <Link
        to={destination}
        className="bg-sky-800 text-white px-4 py-1 rounded-lg w-fit"
      >
        <BsArrowLeft className="text-2xl" />
      </Link>
    </div>
  );
};

export default BackButton;
