import { ReactElement, createContext, useState } from "react"

export type ProductType = {
  sku: string,
  name: string,
  price: number
}

const initState: ProductType[] = [
  {
    "sku": "item0001",
    "name": "Apple",
    "price": 0.6
  },
  {
    "sku": "item0002",
    "name": "Orange",
    "price": 0.25
  }
]

export type UseProductsContextType = { products: ProductType[] }

const initContextState: UseProductsContextType = { products: [] }

const ProductsContext = createContext<UseProductsContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products] = useState<ProductType[]>(initState)

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsContext
