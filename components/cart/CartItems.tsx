"use client";

import { cartData } from "@/data";
import Image from "next/image";
import ContinueShoppingBtn from "../ContinueShoppingBtn";
import { useContext } from "react";
import CartContext from "@/context/CartContext";
import CartItem from "./CartItem";

export default function CartItems({ isCart }: { isCart: boolean }) {
  const { cart } = useContext(CartContext);
  return (
    <section className="md:col-span-8">
      <div className="px-6 pt-7 pb-3 hidden md:block bg-[#E5E6EA]">
        <h2 className="text-2xl font-medium ">Select Items</h2>
      </div>
      <div className="bg-black/30 h-[1.5px] hidden md:block" />
      <div className="pb-2 pt-9 px-2 md:px-6 bg-[#E5E6EA] lg:max-h-[350px] lg:overflow-y-auto scroll-smooth">
        {cart.length > 0 ? (
          cart.map((cartItem, i) => {
            return <CartItem key={i} cartItem={cartItem} isCart={isCart} />;
          })
        ) : (
          <div>
            <p className="text-center font-medium text-xl my-[8rem]">No items in Cart!</p>
          </div>
        )}
      </div>
    </section>
  );
}
