import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from '../Button/Button';
import './Cart.css'
import { BsCartPlusFill } from "react-icons/bs"

export const Cart = (props) => {
    const itemsInCart = props.cart;
    const totalPrice = itemsInCart.reduce((total, course) => total+ course.price, 0)

  return (
    <>
    <div className="cart-headding">
        <h5>Your Cart <BsCartPlusFill /></h5>
    </div>
        <Row>
            <Col xl={6}><p><small>Course Added:</small></p></Col>
            <Col xl={6}><p>{props.cart.length}</p></Col>
        </Row>
        <Row>
            <Col xl={6}><p>Price:</p></Col>
            <Col xl={6}><p>${totalPrice}</p></Col>
        </Row>
        <div className="total-price">
            <Row>
            <Col xl={6}><p>Total:</p></Col>
            <Col xl={6}><p>${totalPrice}</p></Col>
            </Row>
        </div>
        <Button text='Checkout' styleClass='btn-warning' />
    </>
  )
}
