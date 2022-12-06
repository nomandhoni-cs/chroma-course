import { Container } from "react-bootstrap"
import { Cart } from "../Cart/Cart"


const Checkout = ({cart, unitPrice}) => {
  console.log("Cart", cart);
  return (
    <Container>
          <Cart cart={cart} unitPrice={unitPrice}/>
    </Container>
  )
}

export default Checkout