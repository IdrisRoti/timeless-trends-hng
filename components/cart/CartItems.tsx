"use client";

import { useContext } from "react";
import CartContext from "@/context/CartContext";
import CartItem from "./CartItem";

export default function CartItems({ isCart }: { isCart: boolean }) {
  const { cart, clearCart } = useContext(CartContext);
  return (
    <section className="md:col-span-8">
      <div className="px-6 pt-7 pb-3 hidden md:flex bg-[#E5E6EA] items-center justify-between">
        <h2 className="text-2xl font-medium ">
          {isCart ? "Select Items To Checkout" : "Preceed To Checkout"}
        </h2>
        <button disabled={cart.length === 0} onClick={()=> clearCart()} className="uppercase p-[0.625rem] text-center bg-black font-medium w-fit text-xs sm:text-base text-white hover:opacity-60 transition duration-500 disabled:opacity-40 disabled:cursor-not-allowed">
          Clear cart
        </button>
      </div>
      <div className="bg-black/30 h-[1.5px] hidden md:block" />
      <div className="pb-2 pt-5 px-2 md:px-6 bg-[#E5E6EA] lg:max-h-[450px] lg:min-h-[300px] lg:overflow-y-auto scroll-smooth">
        {cart.length > 0 ? (
          cart.map((cartItem, i) => {
            return <CartItem key={i} cartItem={cartItem} isCart={isCart} />;
          })
        ) : (
          <div>
            <p className="text-center font-medium text-xl my-[8rem]">
              Nothing to see here :( <br /> Add some products to cart!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
