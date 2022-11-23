import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./Faq.css";
const Faq = () => {
  return (
    <Container>
      <div className="faq-heading text-center">
        <h2>Frequently Asked Questions</h2>
      </div>
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5>What is Chroma Course</h5>
          </Accordion.Header>
          <Accordion.Body>
            Chroma Course is an online learning community with thousands of classes
            for creative and curious people, on topics including UI/UX
            design crafts, programming, and more. On Chroma Course,
            you’ll find inspiration from hands-on classes and teachers at the
            top of their creative fields, so you can take the next step in your
            creative journey.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h5>What can I learn from Chroma Course?</h5>
          </Accordion.Header>
          <Accordion.Body>
            Chroma Course has hundreds of classes in everything from UI/UX
            design crafts, programming. If it's something creative, you can
            learn it on Chroma Course.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h5>Can I teach on Chroma Course?</h5>
          </Accordion.Header>
          <Accordion.Body>
            Yes! Chroma Course teachers are everyday creatives and professionals
            who want to share their passion, and the skills and experience
            they’ve gained in their creative disciplines with a community of
            eager learners.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Faq;
