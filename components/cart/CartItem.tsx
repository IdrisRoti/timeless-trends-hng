'use client';

import Image from 'next/image';
import React, { useContext } from 'react';
import { ProductType } from '../products/ProductCard';
import CartContext from '@/context/CartContext';
import Link from 'next/link';

export default function CartItem({
  cartItem,
  isCart,
}: {
  cartItem: ProductType;
  isCart?: boolean;
}) {
  const { increaseQty, decreaseQty, removeFromCart } = useContext(CartContext);
  return (
    <div className='mb-3'>
      <article className='flex items-center py-3 px-2'>
        {/* check icon */}
        {isCart && (
          <input
            className='hidden md:block bg-black mr-2 xl:mr-10 w-4 h-4 cursor-pointer'
            type='checkbox'
          />
        )}
        {/* product image */}
        <div className=' border border-black/40 bg-white mr-2 lg:mr-3.5 '>
          {/* <div className='relative w-7 md:w-[3.5rem] h-9 md:h-[4.7rem]'> */}
          <div className='relative w-[3.5rem] h-[4.7rem]'>
            <Image
              className='object-cover'
              src={`https://api.timbu.cloud/images/${cartItem.images[0].url}`}
              alt=''
              fill
            />
          </div>
        </div>
        {/* product details */}
        <div className='mr-2 xl:mr-10'>
          <p className='mb-2 text-xs xl:text-base'>{cartItem.category}</p>
          <Link href={`/product/${cartItem.id}`}>
            <h2 className='text-sm lg:text-lg font-bold mb-2.5 md:mb-5'>
              {cartItem.name}
            </h2>
          </Link>
          <button
            onClick={() => removeFromCart(cartItem.id)}
            className='text-[#E21A1A] lg:text-base text-sm hover:opacity-80 transition duration-500'
          >
            Remove
          </button>
        </div>
        <div
          className={`${
            isCart && 'ml-auto flex flex-col lg:flex-row max-lg:gap-4'
          }`}
        >
          {/* increase and decrease buttons */}
          <div className={`gap-2 ${isCart ? 'flex' : 'hidden'} items-center`}>
            {/* incraese quantity button */}
            <div
              onClick={() => decreaseQty(cartItem.id)}
              className='w-6 h-6 cursor-pointer border rounded-full p-1 hover:border-black/80 transition duration-500'
            >
              <Image
                src={'/minus.png'}
                alt='increase button'
                width={24}
                height={24}
              />
            </div>
            <div className='w-6 h-6 flex items-center justify-center text-lg bg-white'>
              {cartItem.quantity}
            </div>
            {/* decrease quantity button */}
            <div
              onClick={() => increaseQty(cartItem.id)}
              className='w-6 h-6  cursor-pointer hover:opacity-70 border rounded-full p-1 hover:border-black/80 transition duration-500'
            >
              <Image
                src={'/plus.png'}
                alt='decrease button'
                width={24}
                height={24}
              />
            </div>
          </div>
          {/* product price */}
          <div className='ml-4 lg:ml-[3rem] xl:ml-[6.5rem] text-sm font-semibold md:text-base'>
            ${cartItem.price.toFixed(2)}
          </div>
        </div>
        {/* product price * quantity  total */}
        <div
          className={`${
            isCart ? 'hidden lg:block' : 'block'
          } text-sm lg:text-base ml-4 md:ml-[3rem] xl:ml-[6.5rem] font-semibold`}
        >
          ${(cartItem.price * cartItem?.quantity!).toFixed(2)}
        </div>
      </article>
      <div className='bg-black/30 h-[1px]' />
    </div>
  );
}
