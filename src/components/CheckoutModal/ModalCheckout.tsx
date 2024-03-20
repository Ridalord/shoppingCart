import useCart from "../hooks/useCart";
import classes from "./ModalCheckout.module.css";

type PropTypes = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModalCheckout({ setShowModal }: PropTypes) {
  const { cart, totalPrice, REDUCER_ACTIONS, dispatch } = useCart();

  const handleCheckout = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    setShowModal(prev => !prev);
  };

  return (
    <div className={classes.overlay}>
      <div className={classes.content}>
        <h2>Thank you!</h2>
        <div>
          <span>You have just picked </span>
          {cart.map((item, index) => (
            <div className={classes.item} key={index}>
              <span>{ index === 1 && `& `}{item.quantity} </span>
              <span>{item.name}{item.quantity > 1 && 's'} </span>
            </div>
          ))}
        </div>
        <div className={classes.total}>
          <p>Total: {totalPrice}</p>
        </div>
        <p className={classes.message}>Please proceed to pay</p>
        <button onClick={handleCheckout}>Pay</button>
      </div>
    </div>
  );
}
