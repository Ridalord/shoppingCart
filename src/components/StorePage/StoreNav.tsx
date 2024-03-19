import classes from "./StorePage.module.css"
import Logo from "./images/halord-store.jpg"
import ToggleButton from "./toggleButton";
import useCart from "../hooks/useCart";
import { Link } from "react-router-dom";

export default function StoreNav() {
  const {dispatch, REDUCER_ACTIONS} = useCart()
  const handleChange = () => {
    dispatch({type: REDUCER_ACTIONS.TOGGLE_OFFER})
  };
  return (
    <nav className={`d-flex justify-content-between ${classes.navWrap}`}>
      <Link to={"/"}>
        <img src={Logo} alt="Logo" className={classes.logo} />
      </Link>
      <div>
        <ToggleButton togglePromo={handleChange} />
      </div>
    </nav>
  )
}