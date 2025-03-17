import Link from 'next/link'
import React from 'react'

const RealEstate = () => {
  return (
    <section className="real-estate-section min-h-screen justify-center items-center flex flex-col">
      <h3 className="uppercase animate-bounce text-white text-3xl font-bold">Real Estates</h3>
      <div className="max-w-2xl text-center text-white bg-black mix-blend-overlay p-4 bg-opacity-50">
      <p className="p-4 text-[12px]">We have a variety of real estate properties available for sale.
        Our properties are designed to suit your unique needs. 
        We have plenty of land available for both residential  purposes.
        In addition, we have a team of experienced real estate agents who will help you find the perfect property.
      </p>
      </div>
      <Link href="/real-estate"
        className='bg-white text-black p-2 rounded-lg mt-4 hover:bg-green-500 hover:text-white text-[12px]'
      >Explore more</Link>
    </section>
  )
}

export default RealEstate