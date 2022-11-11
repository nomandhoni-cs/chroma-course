import React from "react";
import { Container } from "react-bootstrap";
import ComingSoon from "../ComingSoon/ComingSoon";

const Design = ({ backgroundImg }) => {
  return (
    <Container>
      <ComingSoon
        pageName="Design"
        backgroundImg={backgroundImg}
        text="Coming Soon"
        highlitedWord="!"
      />
    </Container>
  );
};

export default Design;
