import { Container } from "react-bootstrap"
import { Cart } from "../Cart/Cart"


const Checkout = ({ cart, removeFromCart, unitPrice }) => {
  console.log("Cart", cart);
  return (
    <Container>
      <Cart cart={cart} removeFromCart={removeFromCart} unitPrice={unitPrice} />
    </Container>
  )
}

export default Checkout