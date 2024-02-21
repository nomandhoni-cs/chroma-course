import Button from "../Button/Button";
import { HiShoppingCart } from "react-icons/hi";
import SingleCartItem from "../SingleCartItem/SingleCartItem";

export const Cart = (props) => {
  const itemsInCart = props.cart;
  const totalPrice = itemsInCart.reduce(
    (total, course) => total + course.price,
    0
  );
  const tax = parseFloat((totalPrice * 0.12).toFixed(1));
  const total = (tax + totalPrice).toFixed(1);
  return (
    <div className="bg-light-tertiary dark:bg-dark-tertiary shadow rounded-lg p-6 my-16">
      <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4 flex items-center">
        <HiShoppingCart className="mr-2" /> Your Cart
      </h1>
      {itemsInCart.map((singleItem) => (
        <SingleCartItem
          key={singleItem.id}
          singleItem={singleItem}
          removeFromCart={props.removeFromCart}
        />
      ))}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-500 dark:text-gray-100">Tax</span>
          <span className="text-gray-700 dark:text-gray-300">${tax}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-500 dark:text-gray-100">Price</span>
          <span className="text-gray-700 dark:text-gray-300">
            ${totalPrice}
          </span>
        </div>
        <div className="flex justify-between items-center font-semibold mb-4">
          <span className="text-gray-500 dark:text-gray-100">Total</span>
          <span className="text-gray-700 dark:text-gray-300">${total}</span>
        </div>
        <Button text="Checkout" styleClass="btn-checkout w-full" />
      </div>
    </div>
  );
};
