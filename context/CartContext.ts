import { createContext, Dispatch, SetStateAction } from 'react';
import { ProductType } from '@/components/products/ProductCard';

type CartContextType = {
  cart: ProductType[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
};

const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => null,
  removeFromCart: () => null,
  clearCart: () => null,
  increaseQty: () => null,
  decreaseQty: () => null,

});

export default CartContext;
