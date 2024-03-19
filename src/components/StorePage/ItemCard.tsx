import { ProductType } from "../context/ProductsProvider";
import useCart from "../hooks/useCart"
import classes from "./ItemCard.module.css"
import Buy1Get1Free from "./images/buy1get1free.png"
import Buy2Get1Free from "./images/buy2get1free.png"
import { ReactElement } from "react";

type PropTypes = {
  product: ProductType;
}

export default function ItemCard({ product }: PropTypes) {
  const { REDUCER_ACTIONS, dispatch } = useCart();
  const { activeOffers } = useCart();
  const img: string = new URL(`./images/${product.sku}.jpg`, import.meta.url).href
  const handleAddToCart = (product: ProductType) => {
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, quantity: 1 } })
  }
  let banner: ReactElement;
  if (activeOffers && product.name === "Apple") {
    banner= <img src={Buy1Get1Free} />
  } else if (activeOffers && product.name === "Orange") {
    banner = <img src={Buy2Get1Free} />
  } else {
    banner = <span></span>
  }
  return(
    <div className={classes.cardWrap}>
      <div>
        <img src={img} alt={product.name} />
        {banner}
      </div>
      <div>
        <h5>{product.name}</h5>
        <p>${(product.price).toFixed(2) }</p>
        <button onClick={()=>handleAddToCart(product)}>Add to cart</button>
      </div>
    </div>
  )
}