'use client';

import { useEffect, useState } from 'react';
import CartContext from './CartContext';
import { ProductType } from '@/components/products/ProductCard';
import toast from 'react-hot-toast';

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  // get cart from localStorage if present
  const cartFromLocalStorage =
    typeof localStorage != 'undefined' && localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart')!)
      : [];

  // This is to fix the bug of users who already have the old static data in their localStorage which causes error
  const filteredCartItems = cartFromLocalStorage.filter(
    (cartItems: ProductType) => cartItems.desciption
  );

  const [cart, setCart] = useState<ProductType[] | []>(filteredCartItems);

  //To fix hydration error caused by localStorage
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const addToCart = (product: ProductType) => {
    let updatedCart;
    // check if product has been added to cart
    const inCart = cart.find((item) => item.id === product.id);

    if (inCart) {
      updatedCart = cart.map((cartItem) =>
        cartItem.id === product.id
          ? { ...cartItem, quantity: cartItem.quantity! + 1 }
          : cartItem
      );
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
    toast.success('Product added to cart');
  };

  const removeFromCart = (id: string) => {
    let updatedCart;
    updatedCart = cart.filter((cartItem) => cartItem.id != id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    toast.success('Product removed from cart');
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  const increaseQty = (id: string) => {
    let updatedCart;
    const itemInCart = cart.find((item) => item.id === id);
    if (itemInCart) {
      updatedCart = cart.map((cartItem) =>
        cartItem.id === id
          ? {
              ...cartItem,
              quantity:
                cartItem.quantity! < cartItem.availaible_quantity
                  ? cartItem.quantity! + 1
                  : cartItem.quantity,
            }
          : cartItem
      );
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  const decreaseQty = (id: string) => {
    let updatedCart;
    const itemInCart = cart.find((item) => item.id === id);
    if (itemInCart) {
      updatedCart = cart.map((cartItem) =>
        cartItem.id === id
          ? {
              ...cartItem,
              quantity: cartItem.quantity! > 1 ? cartItem.quantity! - 1 : 1,
            }
          : cartItem
      );
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  console.log('CART: ', cart);

  if (!isMounted) {
    return <></>;
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
