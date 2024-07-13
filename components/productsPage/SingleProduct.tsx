"use client";

import Image from "next/image";
import { ProductType } from "../products/ProductCard";
import { useContext, useState } from "react";
import CartContext from "@/context/CartContext";
import  Link  from 'next/link';

export default function SingleProduct({
  productData,
}: {
  productData: ProductType;
}) {
  const [imgUrl, setImgUrl] = useState(productData.images[0].url);

  const { addToCart, cart } = useContext(CartContext);

  const incart = cart.some((cartItem) => cartItem.id === productData.id);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-[9.3rem] mb-6 max-w-[70rem] mx-auto px-5 md:px-9">
      <section className="">
        <div className="w-full h-[23rem] relative border-2 rounded-3xl overflow-hidden">
          <Image
            className="w-full hover:scale-125 transition duration-500 object-contain"
            fill
            src={`https://api.timbu.cloud/images/${imgUrl}`}
            alt=""
          />
        </div>
        <div className="flex items-center justify-center gap-6 mt-6">
          {productData.images.map((image) => {
            return (
              <article
                onClick={() => setImgUrl(image.url)}
                className={`w-[20%] border-2  rounded-xl cursor-pointer aspect-square relative overflow-hidden ${
                  image.url === imgUrl && "border-blue-800"
                }`}
              >
                <Image
                  className="object-cover"
                  fill
                  src={`https://api.timbu.cloud/images/${image.url}`}
                  alt=""
                />
              </article>
            );
          })}
        </div>
      </section>
      <section className="flex flex-col gap-6 md:w-[70%]">
        <h2 className="text-3xl font-semibold">{productData.name}</h2>
        <p className="text-gray-600 text-sm">{productData.desciption}</p>
        <span className="px-3 py-1 bg-red-600/40 text-red-700 w-fit rounded-full text-xs md:text-sm">
          {productData.category}
        </span>
        <div className="flex gap-4">
          <span className="bg-green-600/40 text-green-700 font-bold px-2 py-2 rounded-full text-xs">
            + {productData.availaible_quantity}
          </span>
          <span className="italic font-semibold">In stock</span>
          {/* <span className="font-bold text-2xl">$ {productData.price}</span> */}
        </div>
        {incart ? (
        <Link
          href="/cart"
          className="inline-block uppercase p-[0.625rem] text-center text-xs sm:text-base bg-blue-900 font-medium w-full text-white mt-9 hover:opacity-60 transition duration-500"
        >
          View cart
        </Link>
      ) : (
        <button
          onClick={() => addToCart(productData)}
          className="uppercase p-[0.625rem] text-center bg-black font-medium w-full text-xs sm:text-base text-white mt-9 hover:opacity-60 transition duration-500"
        >
          add to cart
        </button>
      )}
        {/* <button
          onClick={() => addToCart(productData)}
          className="uppercase p-[0.625rem] text-center bg-black font-medium w-full text-white mt-9 hover:opacity-60 transition duration-500"
        >
          add to cart
        </button> */}
      </section>
    </div>
  );
}
