import { Container } from 'react-bootstrap'
import ComingSoon from '../ComingSoon/ComingSoon'

const Crafts = ({backgroundImg}) => {
  return (
    <Container>
    <Container>
      <ComingSoon
        pageName="Crafts"
        backgroundImg={backgroundImg}
        text="Coming Soon" highlitedWord="!"
      />
    </Container>
    </Container>
  )
}

export default Crafts