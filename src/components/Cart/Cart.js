import Button from '../Button/Button';
import './Cart.css'
import { BsCartPlusFill } from "react-icons/bs"
import SingleCartItem from '../SingleCartItem/SingleCartItem';

export const Cart = (props) => {
    const itemsInCart = props.cart;
    const totalPrice = itemsInCart.reduce((total, course) => total + course.price, 0);
    const tax = parseFloat((totalPrice * 0.12).toFixed(1));
    const total = (tax + totalPrice).toFixed(1);
    return (
        <>
            <div className="cart-heading text-center">
                <h5>Your Cart <BsCartPlusFill /></h5>
            </div>
            <div className="cart-info">
                <div className="item-text left-aligned">Items Added</div>
                <div className="total-items right-aligned"><p>: {props.cart.length}</p></div>
            </div >
            {
                itemsInCart.map((singleItem) => <SingleCartItem key={singleItem.id} singleItem={singleItem} removeFromCart={props.removeFromCart} />)
            }
            <div className="cart-info">
                <div className="text left-aligned"><p>Tax</p></div>
                <div className="price right-aligned"><p>: ${tax}</p></div>
            </div>
            <div className="cart-info">
                <div className="text"><p>Price</p></div>
                <div className="price right-aligned"><p>: ${totalPrice}</p></div>
            </div>
            <div className="cart-info total-price">
                <div className="text"><p>Total</p></div>
                <div className="price right-aligned"><p>: ${total}</p></div>
            </div>
            <div className="checkout-btn text-center">
                <Button text='Checkout' styleClass='btn-checkout' />
            </div>
        </>
    )
}
