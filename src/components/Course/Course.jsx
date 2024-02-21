import React from "react";
import Button from "../Button/Button";
import { BsCartPlusFill, BsFillCartCheckFill } from "react-icons/bs";

const Course = (props) => {
  const {
    duration,
    in_cart,
    price,
    instructor_photo,
    title,
    instructor,
    course_thumbnail,
  } = props.singleCourse;

  return (
    <div className="max-w-sm mx-auto bg-white dark:bg-dark-tertiary shadow-md rounded overflow-hidden rounded-t-2xl">
      <img
        src={course_thumbnail}
        alt={title}
        className="h-56 w-full object-cover"
      />
      <div className="p-3">
        <h3 className="text-lg font-semibold dark:text-white mb-2">{title}</h3>
        <div className="instructor-info flex items-center mb-2">
          <div className="instructor-photo w-8 h-8 rounded-full overflow-hidden">
            <img
              src={instructor_photo}
              alt={instructor}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="instructor-name ml-2">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {instructor}
            </p>
          </div>
        </div>
        <div className="price-duration grid grid-cols-2 mb-2">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <small>Price:</small> <b>${price}</b>
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <b>{duration}</b>
          </p>
        </div>
        <div className="add-cart-btn text-center mt-4">
          <Button
            styleClass={`flex items-center text-white hover:text-black dark:text-black justify-center bg-light-primary dark:bg-dark-primary hover:bg-light-tertiary border-white dark:border-dark-tertiary hover:border-light-primary dark:hover:bg-dark-tertiary dark:hover:text-white dark:hover:border-dark-primary`}
            icon={
              in_cart === false ? (
                <BsCartPlusFill className="mr-1" />
              ) : (
                <BsFillCartCheckFill className="mr-1" />
              )
            }
            text={in_cart === false ? "Add to Cart" : "Added"}
            onClick={() => {
              props.addToCart(props.singleCourse, props.singleCourse.in_cart);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Course;
