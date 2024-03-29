import classes from "./LandingPage.module.css"
import Logo from "./halord-store.jpg"
import { useNavigate } from 'react-router-dom';



export default function LandingPage() {
  const navigate = useNavigate();
  const handleclickStart = () => {
    navigate('/store')
  }
  return (
    <div className={classes.wrap}>
      <div className={classes.overlay}>
        <div>
          <img src={Logo} alt="Logo" className={classes.logo} />
        </div>
        <div className={`d-flex justify-content-between align-items-center ${classes.coonetnt}`}>
          <div>
            <h1>Grocery Checkout</h1>
            <p>Streamline Your Shopping Experience with Grocery Checkout - Empowering You to Take Control, Navigate Aisles Efficiently, and Enjoy the Convenience of Self-Checkout!</p>
            <button className={classes.button} onClick={handleclickStart}>Start Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}