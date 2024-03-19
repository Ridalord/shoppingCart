import { CartItemType } from "../context/CartProvider"
import useCart from "../hooks/useCart"
import classes from "./StorePage.module.css"
import { X } from "react-bootstrap-icons";

type PropTypes = {
  cartItem: CartItemType,
  index: number
}
export default function CartLineItem({ cartItem, index }: PropTypes) {
  const { REDUCER_ACTIONS, dispatch, activeOffers } = useCart();

  const onQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      dispatch({
        type: REDUCER_ACTIONS.QUANTITY,
        payload: { ...cartItem, quantity: newQuantity }
      });
    }
  };
  let unit: number;
  
  

  const onRemoveProduct = () => {
    dispatch({
      type: REDUCER_ACTIONS.REMOVE,
      payload: { ...cartItem }
    });
  };

  let price: number;

  if (activeOffers) {
    if (cartItem.name === "Apple") {
      price = parseFloat(((cartItem.price * cartItem.quantity) / 2).toFixed(2))
      unit = 2
    } else {
      const orangesInOffer = Math.floor(cartItem.quantity / 3); // Get the number of oranges in the offer
      const orangesNotInOffer = cartItem.quantity % 3; // Get the remaining oranges not in the offer
      price = parseFloat(((orangesInOffer * 2 + orangesNotInOffer) * cartItem.price).toFixed(2)); // Calculate total price
      unit = 1;
    }
  } else {
    price = cartItem.price * cartItem.quantity
    unit = 1;
  }
  const onAddQuantity = () => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...cartItem, quantity: cartItem.quantity + unit }
    });
  };

  const onSubtractQuantity = () => {
    if (cartItem.quantity > 1) {
      dispatch({
        type: REDUCER_ACTIONS.QUANTITY,
        payload: { ...cartItem, quantity: cartItem.quantity - unit }
      });
    }
  };

  return (
    <tr className={classes.cartLineItem}>
      <td>{index + 1}</td>
      <td>{cartItem.name}</td>
      <td className={classes.productQuantity}>
        <div className={classes.quantityButtons}>
          <button className={classes.minusQuantity} onClick={onSubtractQuantity}>-</button>
          <button className={classes.addQuantity} onClick={onAddQuantity}> + </button>
        </div>
        <input
          type="number"
          name="product-quantity-input"
          className={classes.quantityInput}
          min="0"
          value={cartItem.quantity}
          onChange={onQuantityChange} // Add onChange handler
        />
      </td>
      <td>${price}</td>
      <td>
        <button className="item-remove-btn" onClick={onRemoveProduct}>
          <X />
        </button>
      </td>
    </tr>
  );
}
