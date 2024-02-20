import Faq from "../Faq/Faq";
import Courses from "../Courses/Courses";
import { Body } from "../Body/Body";
import WhyUs from "../WhyUs/WhyUs";
import Brands from "../Brands/Brands";
const Home = ({ fakeData, bannerImage, addToCart, cart, unitPrice }) => {
  return (
    <>
      <Body courseList={fakeData} halfBanner={bannerImage} />
      <WhyUs />
      <Courses
        addToCart={addToCart}
        cart={cart}
        unitPrice={unitPrice}
        courseList={fakeData}
      />
      <Brands />
      <Faq />
    </>
  );
};

export default Home;
