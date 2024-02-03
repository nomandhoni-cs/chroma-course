import Faq from "../Faq/Faq";
import Courses from "../Courses/Courses";
import { Body } from "../Body/Body";
import WhyUs from "../WhyUs/WhyUs";
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
      <Faq />
    </>
  )
};

export default Home;
