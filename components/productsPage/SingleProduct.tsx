'use client';

import { ProductType } from '../products/ProductCard';
import { useContext, useState } from 'react';
import CartContext from '@/context/CartContext';
import Link from 'next/link';
import { RiErrorWarningLine } from 'react-icons/ri';
import { FaStar } from 'react-icons/fa';
import ImageGallery from './ImageGallery';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SIZES = ['L', 'XL', 'XXL'];

export default function SingleProduct({
  productData,
}: {
  productData: ProductType;
}) {
  const [imgUrl, setImgUrl] = useState(productData.images[0].url);
  const [size, setSize] = useState('L');

  const { addToCart, cart } = useContext(CartContext);

  const incart = cart.some((cartItem) => cartItem.id === productData.id);

  const router = useRouter()

  return (
    <div className='mt-[7rem] mb-6 max-w-[70rem] mx-auto px-5 md:px-9'>
      <div
      onClick={()=>router.back()}
        className="cursor-pointer flex items-center gap-2 my-2 w-fit px-2 py-2 hover:bg-slate-200 transition duration-300">
        <Image
          src={'/angle-left.png'}
          alt='Continue shopping icon'
          width={24}
          height={24}
        />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-center '>
        <ImageGallery
          productData={productData}
          imgUrl={imgUrl}
          setImgUrl={setImgUrl}
        />
        {/* PRODUCT DETAILS */}
        <section className='flex flex-col gap-2 lg:w-[70%] lg:col-span-3'>
          <h2 className='text-3xl font-semibold'>{productData.name}</h2>
          <p className='text-gray-600 text-sm'>{productData.desciption}</p>
          <span className='px-3 py-1 bg-red-600/40 text-red-700 w-fit rounded-full text-xs md:text-sm'>
            {productData.category}
          </span>
          <div className='flex items-center gap-2 text-red-500'>
            <span className=' text-xs'>
              <RiErrorWarningLine className='w-4 h-4' />
            </span>
            <span className=''>
              {productData.availaible_quantity} units left
            </span>
            {/* <span className="font-bold text-2xl">$ {productData.price}</span> */}
          </div>
          <p className='text-sm'>
            + shipping from $5 to LEKKI-AJAH (SANGOTEDO)
          </p>
          <div className='flex gap-2 items-center'>
            <FaStar className='w-4 h-4 text-orange-400' />
            <FaStar className='w-4 h-4 text-orange-400' />
            <FaStar className='w-4 h-4 text-orange-400' />
            <FaStar className='w-4 h-4 text-orange-400' />
            <FaStar className='w-4 h-4 text-orange-400' />
          </div>
          <div>
            <h3>VARIATION AVAILABLE</h3>
            <div className='flex items-center gap-2 mt-3'>
              {SIZES.map((label, i) => (
                <button
                  key={i}
                  onClick={() => setSize(label)}
                  className={`w-10 h-10 flex items-center justify-center rounded-sm border-2  hover:opacity-60 cursor-pointer transition duration-300 ${
                    size === label && 'border-blue-800'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {incart ? (
            <Link
              href='/cart'
              className='inline-block uppercase p-[0.625rem] text-center text-xs sm:text-base bg-blue-900 font-medium w-full text-white mt-4 hover:opacity-60 transition duration-500'
            >
              View cart
            </Link>
          ) : (
            <button
              onClick={() => addToCart(productData)}
              className='uppercase p-[0.625rem] text-center bg-black font-medium w-full text-xs sm:text-base text-white mt-4 hover:opacity-60 transition duration-500'
            >
              add to cart
            </button>
          )}
        </section>
      </div>
    </div>
  );
}
