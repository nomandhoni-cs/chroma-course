import { Row } from 'react-bootstrap'
import Button from '../Button/Button';
import './Cart.css'
import { BsCartPlusFill } from "react-icons/bs"
import SingleCartItem from '../SingleCartItem/SingleCartItem';

export const Cart = (props) => {
    const itemsInCart = props.cart;
    const totalPrice = itemsInCart.reduce((total, course) => total+ course.price, 0);
    const tax = parseFloat((totalPrice * 0.12).toFixed(1));
    const total = (tax + totalPrice).toFixed(1);
  return (
    <>
    <div className="cart-heading text-center">
        <h5>Your Cart <BsCartPlusFill /></h5>
    </div>
        <Row>
            <div className="text"><p>Items Added</p></div>
            <div className="price"><p>: {props.cart.length}</p></div>
        </Row>
        <Row>
            <div className="text"><p>Unit Price</p></div>
            <div className="price"><p>: ${props.unitPrice}</p></div>
        </Row>
        {
            itemsInCart.map((singleItem) => <SingleCartItem singleItem={singleItem}/>)
        }
        <Row>
            <div className="text"><p>Tax</p></div>
            <div className="price"><p>: ${tax}</p></div>
        </Row>
        <Row>
            <div className="text"><p>Price</p></div>
            <div className="price"><p>: ${totalPrice}</p></div>
        </Row>
        <div className="total-price">
            <Row>
            <div className="text"><p>Total</p></div>
            <div className="price"><p>: ${total}</p></div>
            </Row>
        </div>
        <div className="checkout-btn text-center">

        <Button text='Checkout' styleClass='btn-checkout' />
        </div>
    </>
  )
}
