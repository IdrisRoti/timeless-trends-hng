"use client"

import Image from 'next/image';

export default function SingleProduct() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-[9.3rem] mb-6 max-w-[70rem] mx-auto px-5 md:px-9'>
      <section className=''>
        <div className='w-full h-[23rem] relative border-2 rounded-3xl overflow-hidden'>
          <Image
            className='w-full hover:scale-125 transition duration-500 object-contain'
            fill
            src='/test.jpg'
            alt=''
          />
        </div>
        <div className='flex items-center justify-center gap-6 mt-6'>
          <article className='w-[20%] border-2 border-blue-800 rounded-xl cursor-pointer aspect-square relative overflow-hidden'>
            <Image className='object-cover' fill src='/test.jpg' alt='' />
          </article>
          <article className='w-[20%] border-2 border-blue-800 rounded-xl cursor-pointer aspect-square relative overflow-hidden'>
            <Image className='object-cover' fill src='/test.jpg' alt='' />
          </article>
          <article className='w-[20%] border-2 border-blue-800 rounded-xl cursor-pointer aspect-square relative overflow-hidden'>
            <Image className='object-cover' fill src='/test.jpg' alt='' />
          </article>
        </div>
      </section>
      <section className='flex flex-col gap-6 md:w-[70%]'>
        <h2 className='text-3xl font-semibold'>Casual Mens fit Button Down</h2>
        <p className='text-gray-600 text-sm'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
          ducimus at et blanditiis necessitatibus vero cumque nam veniam
          doloribus quas animi odit porro impedit molestiae soluta accusamus,
          voluptas accusantium expedita!
        </p>
        <span className='px-3 py-1 bg-red-600/40 text-red-700 w-fit rounded-full text-xs md:text-sm'>Casual fits</span>
        <div className='flex gap-6'>
          <span className='bg-green-600/40 text-green-800 px-2 py-2 rounded-full text-xs'>+ 8</span>
          <span className='font-bold text-2xl'>$150</span>
        </div>
        <button
            className='uppercase p-[0.625rem] text-center bg-black font-medium w-full text-white mt-9 hover:opacity-60 transition duration-500'
          >
            add to cart
          </button>
      </section>
    </div>
  )
}
