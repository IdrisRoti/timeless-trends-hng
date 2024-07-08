import Image from 'next/image';
import Link from 'next/link';

export default function ContinueShoppingBtn() {
  return (
    <div className='flex items-center gap-2 my-6 w-fit px-2 py-2 hover:bg-slate-200 transition duration-300 '>
      <Image src={'/angle-left.png'} alt="Continue shopping icon" width={24} height={24} />
      <Link className='text-lg font-bold' href='/'>
        Continue Shopping
      </Link>
    </div>
  );
}
