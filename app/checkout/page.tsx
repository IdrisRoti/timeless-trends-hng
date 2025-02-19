import CartItems from '@/components/cart/CartItems';
import PaymentInfo from '@/components/checkout/PaymentInfo';
import ContinueShoppingBtn from '@/components/ContinueShoppingBtn';

export default function page() {
  return (
    <div className='mt-[9.3rem] max-w-[1440px] mx-auto px-5 md:px-9'>
      <h1 className='text-black text-3xl md:text-4xl font-semibold'>Checkout</h1>
      <div className='mt-[2rem] max-lg:space-y-6 lg:grid grid-cols-12 gap-14 md:gap-7 items-center justify-between mx-auto relative'>
        <CartItems  isCart={false}/>
        <PaymentInfo />
      </div>
      <ContinueShoppingBtn />
    </div>
  );
}
