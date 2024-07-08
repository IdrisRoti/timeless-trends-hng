'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function SelectPaymentType() {
  const [paymentType, setPaymentType] = useState('mastercard');
  return (
    <>
      <div className='ml-6 flex items-center justify-center sm:justify-start lg:justify-center gap-8 mb-[3rem]'>
        <div
          onClick={() => setPaymentType('mastercard')}
          className="relative border border-black/30 cursor-pointer transition duration-500 hover:border-black w-[3.15rem] aspect-square bg-white flex items-center justify-center"
        >
          <Image
            src='/mastercard.png'
            width={30}
            height={24}
            alt='mastercard'
          />
          {paymentType === 'mastercard' && (
            <Image
              src='/checkIcon.png'
              className='z-10 absolute top-1 right-1 bg-black rounded-full aspect-square'
              width={8}
              height={8}
              alt='checkIcon'
            />
          )}
        </div>
        <div
          onClick={() => setPaymentType('paypal')}
          className='relative cursor-pointer transition duration-500 hover:border-black w-[3.15rem] aspect-square bg-white border border-black/30 flex items-center justify-center'
        >
          <Image src='/paypal.png' width={20} height={24} alt='paypal' />
          {paymentType === 'paypal' && (
            <Image
              src='/checkIcon.png'
              className='z-10 absolute top-1 right-1 bg-black rounded-full aspect-square'
              width={8}
              height={8}
              alt='checkIcon'
            />
          )}
        </div>
        <div
          onClick={() => setPaymentType('visa')}
          className='relative cursor-pointer transition duration-500 hover:border-black w-[3.15rem] aspect-square bg-white border border-black/30 flex items-center justify-center'
        >
          <Image src='/visa.png' width={25} height={16} alt='visa' />
          {paymentType === 'visa' && (
            <Image
              src='/checkIcon.png'
              className='z-10 absolute top-1 right-1 bg-black rounded-full aspect-square'
              width={8}
              height={8}
              alt='checkIcon'
            />
          )}
        </div>
      </div>
    </>
  );
}
