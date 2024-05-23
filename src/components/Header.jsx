import React from 'react'
import Link from 'next/link'
export default function Header() {
  return (
    <header className='border-b'>
      <div className="container">
        <div className="flex justify-center items-center">
          <Link href="/" className="text-3xl font-bold py-2 uppercase text-black">
            Testing Skripsi
          </Link>
        </div>
      </div>
    </header>
  )
}
