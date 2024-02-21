import React from "react";
import Swal from "sweetalert2";
import { HiTrash } from "react-icons/hi";

const SingleCartItem = (props) => {
  const { course_thumbnail, title, instructor, price } = props.singleItem;

  // Function to handle item removal
  const handleRemove = () => {
    Swal.fire({
      title: "Remove Course",
      text: `Are you sure you want to remove ${title} from your cart?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#FE4C55",
      confirmButtonText: "Yes, remove it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        props.removeFromCart(props.singleItem);
        Swal.fire(
          "Removed!",
          `${title} has been removed from your cart.`,
          "success"
        );
      }
    });
  };

  return (
    <div className="bg-white dark:bg-dark-secondary shadow rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center mb-4">
      <div className="flex items-center mb-4 sm:mb-0">
        <div className="w-24 h-24 sm:w-20 sm:h-20 bg-gray-100 rounded-lg overflow-hidden mr-4">
          <img
            src={course_thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-base sm:text-lg font-semibold text-black dark:text-gray-200">
            {title}
          </h2>
          <p className="text-sm text-gray-500">by {instructor}</p>
        </div>
      </div>
      <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto mt-4 sm:mt-0">
        <p className="text-base sm:text-lg font-semibold text-black dark:text-gray-200 mr-2 sm:mr-4">
          ${price}
        </p>
        <button
          className="font-body font-semibold text-red-500 mt-2 flex items-center bg-red-100 hover:bg-red-200 dark:text-black rounded-md px-3 py-1"
          onClick={handleRemove}
        >
          <HiTrash className="mr-1" />
          <span className="hidden sm:inline">Remove</span>
        </button>
      </div>
    </div>
  );
};

export default SingleCartItem;
