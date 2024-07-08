"use client"

import CartContext from "@/context/CartContext"
import { useContext } from "react"

const {cart} = useContext(CartContext)

export const getCartTotal = ()=>{
    const total = cart.reduce((acc, currValue)=>{return acc + currValue.quantity! * currValue.price}, 0)
    return total;
  }