import Courses from "../Courses/Courses";

const CatagoryWiseProduct = ({
  fakeData,
  type,
  addToCart,
  cart,
  unitPrice,
}) => {
  const filteredData = fakeData.filter(
    (singleCourse) => singleCourse.type === type
  );
  return (
    <>
      <Courses
        courseList={filteredData}
        addToCart={addToCart}
        cart={cart}
        unitPrice={unitPrice}
      />
    </>
  );
};

export default CatagoryWiseProduct;
