import classes from "./StorePage.module.css"
import Logo from "./halord-store.jpg"
import ToggleButton from "./toggleButton";
import useCart from "../hooks/useCart";

export default function StoreNav() {
  const {dispatch, REDUCER_ACTIONS} = useCart()
  const handleChange = () => {
    dispatch({type: REDUCER_ACTIONS.TOGGLE_OFFER})
  };
  return (
    <nav className={`d-flex justify-content-between ${classes.navWrap}`}>
      <div>
        <img src={Logo} alt="Logo" className={classes.logo} />
      </div>
      <div>
        <ToggleButton togglePromo={handleChange} />
      </div>
    </nav>
  )
}