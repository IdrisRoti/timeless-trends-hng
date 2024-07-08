import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <Link href="/" className='flex'>
        <Image src="/logo.png" alt='logoUp' width={118} height={42} />
        <span className="sr-only">Logoup</span>
    </Link>
  )
}
