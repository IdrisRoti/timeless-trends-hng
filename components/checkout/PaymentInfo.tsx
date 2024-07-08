"use client"

import CartContext from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import SelectPaymentType from './SelectPaymentType';
import toast from 'react-hot-toast';

export default function PaymentInfo() {
  const { cart, clearCart } = useContext(CartContext);

  const total = cart.reduce((acc, currValue) => {
    const totalPrice = acc + (currValue.quantity! * currValue.price);
    return (totalPrice);
  }, 0);

  const router = useRouter()
  
  const handlePayment=()=>{
    clearCart()
    toast.success("Payment Succesful!")
    router.push("/")
    

  }
  
  return (
    <section className='md:col-span-4 bg-[#E5E6EA] max-h-fit  pb-2'>
      <h2 className='font-semibold pt-4 pb-2.5 px-5 text-3xl md:text-4xl text-[#333]'>
        Payment Info
      </h2>
      <div className='bg-black/30 h-[1px]' />
      {/* card type */}
      <p className='mt-3 ml-5 mb-2 text-sm sm:text-base md:text-lg'>
        Card Type
      </p>
      <SelectPaymentType />
      {/* card name */}
      <div>
        <p className='color-[#333] ml-6 mb-3 text-sm sm:text-base md:text-lg'>
          Cardholder Name
        </p>
        <div className='mb-4 px-6'>
          <input className='h-10 w-full p-2 focus:outline-none border focus:border-blue-600' type='text' />
        </div>
      </div>
      {/* card number */}
      <div>
        <p className='color-[#333] ml-6 mb-3 text-sm sm:text-base md:text-lg'>
          Cardholder Number
        </p>
        <div className='px-6 mb-4'>
          <input
            className='h-10 w-full p-2 focus:outline-none border focus:border-blue-600'
            type='text'
          />
        </div>
      </div>
      
      <div className='flex items-center px-6 justify-between gap-4 md:gap-8'>
        {/* expiration date */}
        <div className='flex flex-col'>
          <label className='color-[#333] mb-3 text-sm sm:text-base md:text-lg'>
            Expiration Date
          </label>
            <input className='h-10 p-2 w-[6rem] md:w-auto focus:outline-none border focus:border-blue-600' type='text' />
        </div>
        {/* CVV */}
        <div className='flex flex-col'>
          <label className='mb-3 text-sm sm:text-base md:text-lg'>CVV</label>
            
            <input className='h-10 p-2 w-[6rem] md:w-auto focus:outline-none border focus:border-blue-600' type='text' />
        </div>
      </div>
      <div className='bg-black/30 h-[1px] mt-[3rem]' />
      <div onClick={handlePayment} className='mt-5 mb-[1.5rem] px-4 w-full'>
        <Link
          href='/checkout'
          className='block font-medium text-lg text-center bg-black text-white uppercase w-full p-2.5 hover:opacity-80 duration-500'
        >
          Pay $ {(total + 5).toFixed(2)}
        </Link>
      </div>
    </section>
  );
}
