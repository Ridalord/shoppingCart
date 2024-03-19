// import classes from "./StorePage.module.css"
import Switch from '@mui/joy/Switch';
import useCart from '../hooks/useCart';
import classes from "./StorePage.module.css"


type PropTypes = {
  togglePromo: () => void,
}

export default function ToggleButton({ togglePromo }: PropTypes) {
  const { activeOffers} = useCart();
  return (
    <div className={classes.toggleButton}>
      <span>{activeOffers ? "Exclusive Offer" : "No Offer"}</span>
      <Switch
        checked={activeOffers}
        onChange={togglePromo}
      />
    </div>
    
  )
}