// import classes from "./StorePage.module.css"
import Switch from '@mui/joy/Switch';


type PropTypes = {
  applyPromo: boolean,
  togglePromo: ()=>void,
}

export default function ToggleButton({applyPromo, togglePromo}:PropTypes) {
  return (
    <div>
      <span>{ applyPromo? "Promo" : "No Promo"}</span>
      <Switch
        checked={applyPromo}
        onChange={togglePromo}
      />
    </div>
    
  )
}