import { Container } from "react-bootstrap";
import ComingSoon from "../ComingSoon/ComingSoon";

const Programming = ({ backgroundImg }) => {
  return (
    <Container>
      <ComingSoon
        pageName="Programming"
        backgroundImg={backgroundImg}
        text="Coming Soon" highlitedWord="!"
      />
    </Container>
  );
};

export default Programming;
