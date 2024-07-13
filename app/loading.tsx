import ProductLoader from '@/components/ProductLoader';

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className='max-w-[1100px] mx-auto mt-20'>
      <h2 className='bg-slate-2\400 w-[60%] py-3 my-4 animate-pulse mb-6'>
      </h2>
      <section className='mb-12'>
        <div className='grid grid-cols-2 md:grid-cols-4  gap-[1rem]'>
          <ProductLoader />
          <ProductLoader />
          <ProductLoader />
          <ProductLoader />
          <ProductLoader />
          <ProductLoader />
          <ProductLoader />
          <ProductLoader />
        </div>
      </section>
    </div>
  );
}
