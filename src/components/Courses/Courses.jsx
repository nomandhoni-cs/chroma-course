// Courses.jsx
import Course from "../Course/Course";

function Courses({ courseList, addToCart }) {
  return (
    <div className="courses-section dark:bg-dark-secondary py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {courseList.map((singleCourse) => (
          <Course
            key={singleCourse.id}
            singleCourse={singleCourse}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;
