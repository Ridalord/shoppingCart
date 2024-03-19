// import classes from "./StorePage.module.css"
import Switch from '@mui/joy/Switch';
import useCart from '../hooks/useCart';


type PropTypes = {
  togglePromo: () => void,
}

export default function ToggleButton({ togglePromo }: PropTypes) {
  const { activeOffers} = useCart();
  return (
    <div>
      <span>{activeOffers ? "Exclusive Offer" : "No Exclusive Offer"}</span>
      <Switch
        checked={activeOffers}
        onChange={togglePromo}
      />
    </div>
    
  )
}