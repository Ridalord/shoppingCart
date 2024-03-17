import { ReactElement, createContext, useEffect, useMemo, useReducer } from "react"

export type CartItemType = {
  id: string,
  name: string,
  description: string,
  price: number,
  quantity: number,
}

type CartStateType = {
  cart: CartItemType[],
  activeOffers: boolean
}

const initCartState: CartStateType = {
  cart: JSON.parse(localStorage.getItem('cart')!) || [],
  activeOffers: false
}

const REDUCER_ACTON_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  SUBMIT: "SUBMIT",
  LOAD_CART: "LOAD_CART",
  TOGGLE_OFFER: "TOGGLE_OFFER"
}

export type ReducerActionType = typeof REDUCER_ACTON_TYPE

export type ReducerAction = {
  type: string,
  payload?: CartItemType,
}

const reducer = (state: CartStateType, action: ReducerAction): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTON_TYPE.ADD: {
      // Logic to add items to cart
      if (!action.payload) {
        throw new Error('action.payload missing in ADD action')
      }
      const { id, name, price, description } = action.payload

      const filteredCart: CartItemType[] = state.cart.filter(item => item.id != id)

      const itemExists: CartItemType | undefined = state.cart.find(item => item.id === id)

      const quantity: number = itemExists ? itemExists.quantity + 1 : 1

      return { ...state, cart: [...filteredCart, { id, name, price, quantity, description }] }
    }
    case REDUCER_ACTON_TYPE.REMOVE: {
      // Logic to remove items from cart
      if (!action.payload) {
        throw new Error('action.payload missing in REMOVE action')
      }

      const { id } = action.payload

      const filteredCart: CartItemType[] = state.cart.filter(item => item.id != id)

      return { ...state, cart: [...filteredCart] }
    }
    case REDUCER_ACTON_TYPE.QUANTITY: {
      // Logic to update item quantity in cart
      if (!action.payload) {
        throw new Error('action.payload missing in QUANTITY action')
      }

      const { id, quantity } = action.payload

      const filteredCart: CartItemType[] = state.cart.filter(item => item.id != id)

      const itemExists: CartItemType | undefined = state.cart.find(item => item.id === id)

      if (!itemExists) {
        throw new Error('Item must exist in order to update quantity')
      }

      const updatedItem: CartItemType = { ...itemExists, quantity }

      return { ...state, cart: [...filteredCart, updatedItem] }
    }
    case REDUCER_ACTON_TYPE.SUBMIT: {
      // Logic to submit cart
      return { ...state, cart: [] }
    }
    case REDUCER_ACTON_TYPE.TOGGLE_OFFER: {
      return { ...state, activeOffers: !state.activeOffers }
    }
    case REDUCER_ACTON_TYPE.LOAD_CART: {
      // Logic to load cart from localStorage
      if (!action.payload) {
        throw new Error('action.payload missing in LOAD_CART action');
      }
      const cart: CartItemType[] = JSON.parse(localStorage.getItem('cart')!) || [];
      return { ...state, ...cart };
    }
    default:
      throw new Error('Undefined reducer action type')
  }
}

const useCartContext = (initCartState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initCartState)
  // Other hooks and logic
  const sortedCart = useMemo(() => {
    // Sorting the cart by item names alphabetically
    const sorted = [...state.cart].sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
  }, [state.cart]);
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      dispatch({ type: REDUCER_ACTON_TYPE.LOAD_CART, payload: JSON.parse(storedCart) });
    }
  }, []);
  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTON_TYPE
  }, [])
  const totalCartItems: number = state.cart.reduce((previousValue:number, cartItem:CartItemType) => {
    return previousValue + cartItem.quantity;
  }, 0)
  const totalPrice = useMemo(() => {
    if (state.activeOffers) {
      let total = 0;
      state.cart.forEach(item => {
        const priceInDollars = item.price / 100; // Convert price from cents to dollars
        if (item.name === 'Apple') {
          total += Math.ceil(item.quantity / 2) * priceInDollars; // Buy one, get one free on Apples
        } else if (item.name === 'Orange') {
          total += Math.floor(item.quantity / 3) * 2 * priceInDollars + (item.quantity % 3) * priceInDollars; // 3 for the price of 2 on Oranges
        } else {
          total += item.quantity * priceInDollars; // Other items not under offer
        }
      });
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total); // Format total price in dollars
    } else {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
        state.cart.reduce((previousValue: number, cartItem: CartItemType) => {
          const priceInDollars = cartItem.price / 100; // Convert price from cents to dollars
          return previousValue + (cartItem.quantity * priceInDollars);
        }, 0)
      );
    }
  }, [state.cart, state.activeOffers]);

  const activeOffers = state.activeOffers;

  const cart = sortedCart

  return { dispatch, REDUCER_ACTIONS, totalCartItems, totalPrice, cart, activeOffers }
}

export type UseCartContextType = ReturnType<typeof useCartContext>

const initCartContextState: UseCartContextType = {
  dispatch: () => { },
  REDUCER_ACTIONS: REDUCER_ACTON_TYPE,
  totalCartItems: 0,
  totalPrice: '',
  cart: [],
  activeOffers: false
}

export const CartContext = createContext<UseCartContextType>(initCartContextState)
type ChildrenType = { children?: ReactElement | ReactElement[] }

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  // CartProvider component
  return (
    <CartContext.Provider value={useCartContext(initCartState)}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
