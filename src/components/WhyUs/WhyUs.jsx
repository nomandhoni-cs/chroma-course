import { Container } from "react-bootstrap";
import "./WhyUs.css";
import { BsFillAwardFill } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiRoadMapFill } from "react-icons/ri";
import { MdPayments } from "react-icons/md";
const WhyUs = () => {
  return (
    <Container>
      <div className="why-us-card text-center">
        <div className="single-card">
          <div className="single-card-icon">
            <BsFillAwardFill />
          </div>
          <h3 className="why-heading">Quality Course</h3>
          <p className="why-us-info">
            We offer best quality of courses you can ever imagine.
          </p>
        </div>
        <div className="single-card">
          <div className="single-card-icon">
            <GiTakeMyMoney />
          </div>
          <h3 className="why-heading">Reasonable Price</h3>
          <p className="why-us-info">
            We offer our all course at a reasonable price.
          </p>
        </div>
        <div className="single-card">
          <div className="single-card-icon">
            <MdPayments />
          </div>
          <h3 className="why-heading">Pay Once</h3>
          <p className="why-us-info">
            Pay onetime and forget about billing, get access lifetime.
          </p>
        </div>
        <div className="single-card">
          <div className="single-card-icon">
            <RiRoadMapFill />
          </div>
          <h3 className="why-heading">Complete Guide</h3>
          <p className="why-us-info">
            We will guide you through complete roadmap.
          </p>
        </div>
      </div>
    </Container>
    // <Card style={{ width: '18rem' }}>
    //   <Card.Body>
    //     <Card.Title>Card Title</Card.Title>
    //     <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text>
    //     <Card.Link href="#">Card Link</Card.Link>
    //     <Card.Link href="#">Another Link</Card.Link>
    //   </Card.Body>
    // </Card>
  );
};

export default WhyUs;
