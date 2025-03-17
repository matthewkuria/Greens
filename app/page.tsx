"use client";
import React from "react";
import { playfairDisplay } from "./fonts/fonts";
import Image from "next/image";
import stay from "../public/stay.webp";
import dine from "../public/dine.webp";
import golf from "../public/golf.jpg";
import Dining from "./components/Dining";
import FindUsMap from "./components/Map";
import Link from "next/link";
import Bookings from "./components/Bookings";
import RealEstate from "./components/RealEstate";
export default function Home() {
  return (
    <main className="flex flex-col w-full flex-1 px-1 text-center">
      {/* Background video on the Hero section */}
      <video autoPlay
        loop muted
        preload="metadata"
        poster="/tGreens.jpeg"
        className="object-cover w-full h-screen myVideo"
      >
        {/* The entire video */}
        <source src="/videobg.mp4" type="video/mp4" />
      </video>
     <section className="flex flex-col py-2">
        <h1 className="title text-xl">Thika Greens Golf </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <div className="stay min-h-[200px]">
            <Link href="/accomodation">
              <Image src={stay} alt="Accomodation at Thika  Greens" width={500} height={500}
               className="card-img-top rounded-sm brightness-75 hover:brightness-100 ease-in"/>
            </Link>
            <div className="text-left">
              <p className={`font-semibold py-2`}>Stay</p>
              <p className={`${playfairDisplay.className} font-bold text-xl py-1`}>Stay in Comfort, Relax in Style</p>
              <p className="text-slate-500 text-[13px]">Explore our luxurious accomodation facilities, which are unique in every way.
              </p>
           </div>
        </div>
         <div className="min-h-[200px]">
            <Link href="/restaurant">
              <Image src={dine} alt="Restaurant at Thika Greens" width={500} height={500} 
                className="card-img-top rounded-sm brightness-75 hover:brightness-100"
                />
            </Link>
            <div className="text-left">
              <p className={`font-semibold py-2`}>Dine</p>
              <p className={`${playfairDisplay.className} font-bold text-xl py-1`}>Enjoy every bite.</p>
              <p className="text-slate-500 text-[13px]">Enjoy our delicious meals, prepared by our experienced chefs.
                The perfect place to dine with family and friends.
              </p>
           </div>
        </div>
          <div className="min-h-[200px]">
            <Link href="/golf-course">
              <Image src={golf} alt="Golf at Thika Greens" width={500} height={500} 
                className=" card-img-top rounded-sm brightness-75 hover:brightness-100"
                />
            </Link>
            <div className="text-left">
              <p className={`font-semibold py-2`}>Golf</p>
              <p className={`${playfairDisplay.className} font-bold text-xl py-1 `}>Leisure and Golf</p>
              <p className="text-slate-500 text-[13px]">Discover a round of golf at our world class golf course.This is the perfect place
                to relax and unwind.
              </p>
           </div>
        </div>
        </div>
      </section>
      {/* Dining section on the hero  */}
      <Dining />
      {/* Booking Component */}
      <Bookings />
      {/* Real Estate Component */}
      <RealEstate />
      {/* About Thika Greens Hotel */}
      <section className="flex flex-col py-2 items-center justify-center my-3">
        <h2 className="title text-xl">Our Story</h2>
        <article className="text-[12px] text-center p-4">
          <p className="">
            Thika Greens Golf Resort is part of an 800 acre Golf Estate where residents are developing spectacular homes.
            The key feature of the Resort is an 18 hole par 72 championship Golf Course sitting on 306 acres of a well manicured grass landscape.
            This Magnificent Golf Course is a design of one of the leading golf architects – DDV Group of South Africa, and has been operational since 2014.
            The Resort is 45 minutes drive from the Capital City Nairobi and one hour’s drive from Jomo Kenyatta International Airport. It is accessed through
            the Thika Super Highway , off the Northern Corridor gateway to the Mount Kenya Region.
          </p>
        </article>
        <article className="">

        </article>

      </section>
      {/* Find us */}
      <FindUsMap />
    </main>
  );
}
