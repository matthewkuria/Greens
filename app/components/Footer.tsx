import Link from 'next/link'
import React from 'react'
import SocialsLinks from './SocialsLinks'

export const  Footer = () => {
  return (
    <section className={`bg-slate-900 text-xs text-white p-1`}>
         <div className="flex flex-col md:flex md:flex-row mx-auto md:justify-between p-4">
                <div className="contact flex flex-col w-full items-center justify-center md:w-1/2">
                    <p className="title text-xl">Quick Links</p>
                    <div className="grid grid-cols-2 gap-40  md:grid-cols-2">
                      <div className="flex flex-col">
                        <Link href="/about-us" className='links-style'>About Us</Link>
                        <Link href="/contact-us" className='links-style'>Contact Us</Link>
                        <Link href="/restaurant" className='links-style'>Restaurant</Link>
                        <Link href="/accomodation" className='links-style'>Accomodation</Link>
                        <Link href="/real-estate" className='links-style'>Real Estate</Link>
                        <Link href="/bookings" className='links-style'>Bookings</Link>
                      </div>
                      <div className="flex flex-col">
                        <Link href="/blog" className='links-style'>Blog</Link>
                        <Link href="/gallery" className='links-style'>Gallery</Link>
                        <Link href="/events" className='links-style'>Events</Link>
                        <Link href="/golf-course" className='links-style'>Golf</Link>
                        <Link href="/membership" className='links-style'>Membership</Link>
                        <Link href="/careers" className='links-style'>Careers</Link>
                      </div>
                    </div>
                </div>               
                <div className="support flex flex-col w-full md:w-1/4 justify-end mx-5 ">
                    <p className="footer-title my-5 border-b-1">Contact Us</p>
                    <p className="text-center">Thika Greens Golf Resort</p>
                    <p className="text-center">P.O. Box 1234-01000</p>
                    <p className="text-center">Thika, Kenya</p>
                    <p className="text-center">Tel: +254 743 849907 / +254 114 852230</p>
                    <p className="text-center">Email:info@thikagreensgolf.co.ke</p>
                    <p className="text-center">Reservations:reservations@thikagreensgolfresort.co.ke</p>
                    <p className="text-center">Location:Old Muranga Road off Nairobi. Thika-Nyeri Highway, Kenya.</p>
                  <p className="footer-title my-5  border-b-1">Follow us(Social Media)</p>  
                    <SocialsLinks/>
                </div>                
            </div>
          <div className="flex justify-center items-center text-xs p-4">
              <p className="">&copy;<span className='font-semibold px-0.5'>Thika Greens Golf Resort ||</span>2025. All rights reserved.</p>
          </div>
    </section>
  )
}
