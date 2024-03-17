import { useState } from "react";
import classes from "./StorePage.module.css"
import Logo from "./halord-store.jpg"
import ToggleButton from "./toggleButton";

export default function StoreNav() {
  const [isToggled, setIsToggled] = useState(false);
  const handleChange = () => {
    setIsToggled(!isToggled);
  };
  return (
    <nav className={`d-flex justify-content-between ${classes.navWrap}`}>
      <div>
        <img src={Logo} alt="Logo" className={classes.logo} />
      </div>
      <div>
        <ToggleButton applyPromo={ isToggled} togglePromo={handleChange} />
      </div>
    </nav>
  )
}