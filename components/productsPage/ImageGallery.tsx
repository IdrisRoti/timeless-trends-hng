"use client"

import Image from "next/image";
import { ProductType } from "../products/ProductCard";
import { Dispatch, SetStateAction } from "react";

type PropType ={
    productData: ProductType;
    imgUrl: string;
    setImgUrl: Dispatch<SetStateAction<string>>
}

export default function ImageGallery({productData, imgUrl, setImgUrl}:PropType){
    return (
        <section className='lg:col-span-2'>
        <div className='w-full h-[23rem] relative border-2 rounded-3xl overflow-hidden'>
          <Image
            className='w-full hover:scale-125 transition duration-500 object-contain'
            fill
            src={`https://api.timbu.cloud/images/${imgUrl}`}
            alt=''
          />
        </div>
        <div className='flex items-center justify-center gap-6 mt-6'>
          {productData.images.map((image, i) => {
            return (
              <article
                key={i}
                onClick={() => setImgUrl(image.url)}
                className={`w-[20%] border-2  rounded-xl cursor-pointer aspect-square relative overflow-hidden ${
                  image.url === imgUrl && 'border-blue-800'
                }`}
              >
                <Image
                  className='object-cover'
                  fill
                  src={`https://api.timbu.cloud/images/${image.url}`}
                  alt={productData.name}
                />
              </article>
            );
          })}
        </div>
      </section>
    )
}