import React from 'react'
import Image from 'next/image'
import standardRoom from '../../public/Standard-room.webp'
import superiorRoom from '../../public/Superior-room.webp'
import villasRoom from '../../public/Villas-bedroom.webp'
import villasLivingRoom from '../../public/Villas-living-room.webp'
import { Button } from '@heroui/button'
const Bookings = () => {
  return (
    <section className="flex flex-col py-2 items-center justify-center my-3">
        <h2 className="title text-xl">Accomodation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4  justify-center">
           <article className="text-[12px] text-left p-4 max-w-md">
          <p className="">
            Book your stay at Thika Greens Hotel. We have a variety of rooms to choose from, each with a unique touch.
            Our rooms are designed to make you feel at home. 
          </p>
          <p className="">We have the following awesome suites:</p>
          <ul className="text-left">
            <li>Standard rooms</li>
            <li>Superior rooms</li>
            <li>Executive rooms</li>
            <li>Villas</li>
          </ul>
          <Button className="mt-10  outline-1 outline-green-500 text-xl hover:text-white hover:bg-green-500">Book Now</Button>
        </article>
        <article className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-1 md:p-0">
          <div className="flex flex-col items-center justify-center">
            <Image src={standardRoom} alt="Standard rooms at Thika Greens" width={250} height={250}
              className="card-img-top  brightness-75 hover:brightness-100 ease-in" />
            <p className='text-xs mt-1'>Standard rooms</p>
          </div>  
          <div className="flex flex-col items-center justify-center">
            <Image src={superiorRoom} alt="Superior Rooms at Thika Greens" width={250} height={250}
              className="card-img-top  brightness-75 hover:brightness-100 ease-in" />
            <p className='text-xs mt-1'>Superior Rooms</p>
          </div>
          <div className="flex flex-col items-center justify-center  text-left">
            <Image src={villasRoom} alt="Executive rooms at Thika Greens" width={250} height={250}
              className="card-img-top  brightness-75 hover:brightness-100 ease-in" />
            <p className='text-xs mt-1'>Executive rooms</p>
          </div>  
          <div className="flex flex-col items-center justify-center  text-left">
            <Image src={villasLivingRoom} alt="Villas living rooms at Thika Greens" width={250} height={250}
              className="card-img-top  brightness-75 hover:brightness-100 ease-in" />
            <p className='text-xs mt-1'>Villas living rooms</p>
          </div> 
        </article>
        </div>
      </section>
  )
}

export default Bookings