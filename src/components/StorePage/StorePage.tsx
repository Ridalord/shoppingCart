// import { ProductType } from "../context/ProductsProvider";
// import useCart from "../hooks/useCart";
import { useEffect } from "react";
import useProducts from "../hooks/useProducts";
import ItemCard from "./ItemCard";
import StoreNav from "./StoreNav";
import classes from "./StorePage.module.css"
import useCart from "../hooks/useCart";
import CartLineItem from "./cartLineItem";

export default function StorePage() {
  const { products } = useProducts()
  const {cart, activeOffers,totalPrice, totalCartItems}= useCart()
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('activeOffers', JSON.stringify(activeOffers));
  }, [cart, activeOffers]);
  return (
    <div>
      <StoreNav/>
      <div className={`d-grid ${classes.content}`}>
        <div className={`d-flex ${classes.itemWrap} justify-content-between`}>
          {products.map((product) => {
            return <ItemCard product={product} key={product.sku}/>
          })}
        </div>
        <div className={classes.cartDetails}>
          <h3>Cart Items</h3>
          <div className={classes.tableBody}>
            <table className={classes.cartItemWrap}>
              <tbody>
                <tr>
                  <th>S/N</th>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th></th>
                </tr>
                {cart.length > 0 ? (
                  cart.map((cartItem, index) => (
                    <CartLineItem cartItem={cartItem} index={index} key={cartItem.sku} />
                  ))
                ) : (
                  <tr>
                    <td colSpan={5}>No Item in Cart</td>
                  </tr>
                )}
              </tbody>

            </table>
          </div>
          
          <div className={classes.totalDetails}>
            <div>Total Items: {totalCartItems}</div>
            <div>Total: {totalPrice}</div>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}