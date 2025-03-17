import Link from 'next/link'
import React from 'react'

const Dining = () => {
  return (
    <section className="dining-section min-h-screen justify-center items-center flex flex-col">
      <h3 className="uppercase animate-bounce text-white text-3xl font-bold">Dining</h3>
      <div className="max-w-2xl text-center text-white bg-black mix-blend-overlay p-4">
        <p className="p-4 text-[12px]">We have a fine dining restaurant which is open to non-members,
        this iconic Restaurant offers an indulgent culinary experience with local produce,
        authentic flavors and varied choices on the menu featuring the finest 
        cuts of organically sourced Black Angus beef, fresh sea food and variety of vegetarian options
      </p>
      </div>
      <Link href="/restaurant"
        className='bg-white text-black p-2 rounded-lg mt-4 hover:bg-green-500 hover:text-white text-[12px]'
      >Discover more</Link>
    </section>
  )
}

export default Dining