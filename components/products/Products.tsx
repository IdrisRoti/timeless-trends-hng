'use client';

import ProductCard, { ProductType } from './ProductCard';
import { useState } from 'react';

export default function Products({
  productsData,
}: {
  productsData: ProductType[];
}) {
  const ITEMS_PER_PAGE = 10;

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(ITEMS_PER_PAGE);

  const handleNext = () => {
    setStartIndex((prev) => prev + ITEMS_PER_PAGE);
    setEndIndex((prev) => prev + ITEMS_PER_PAGE);
    window.scrollTo(0, 0);
  };
  const handlePrev = () => {
    setStartIndex((prev) => prev - ITEMS_PER_PAGE);
    setEndIndex((prev) => prev - ITEMS_PER_PAGE);
    window.scrollTo(0, 0);
  };
  // console.log(startIndex, endIndex);

  return (
    <div className='max-w-[1100px] mx-auto mt-11'>
      <h2 className='text-2xl font-semibold mb-6 flex items-center gap-4'>
        Page{' '}
        <div className='bg-black text-sm w-[2rem] text-white aspect-square rounded-full flex items-center justify-center'>
          {Math.ceil(endIndex / ITEMS_PER_PAGE)}
        </div>
        <div className='text-sm'>
          (showing {startIndex + 1} to {endIndex})
        </div>
      </h2>

      <section className='mb-12'>
        <div className='grid grid-cols-2 md:grid-cols-4  gap-[1rem]'>
          {productsData &&
            productsData
              .slice(startIndex, endIndex)
              .map((item, i) => <ProductCard key={i} product={item} />)}
        </div>
        <div className='flex items-center justify-between mt-16 text-white'>
          <button
            disabled={startIndex === 0}
            onClick={handlePrev}
            className='px-3 py-2 bg-black uppercase hover:opacity-70 transition duration-500 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base'
          >
            Previous
          </button>
          <button
            disabled={endIndex >= productsData.length}
            onClick={handleNext}
            className='px-6 py-2 bg-black uppercase hover:opacity-70 transition duration-500 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base'
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
}
