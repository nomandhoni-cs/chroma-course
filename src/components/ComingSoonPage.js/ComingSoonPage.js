import { Container } from "react-bootstrap";
import ComingSoon from "../ComingSoon/ComingSoon";

const ComingSoonPage = ({ backgroundImg, pageName}) => {
  return (
    <Container>
      <ComingSoon
        pageName={pageName}
        backgroundImg={backgroundImg}
        text="Coming Soon" highlitedWord="!"
      />
    </Container>
  );
};

export default ComingSoonPage;
