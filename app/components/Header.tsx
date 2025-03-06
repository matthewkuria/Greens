"use client";
import Navlinks from "./Navlinks";
import HamburgerMenu from "./HamburgerMenu";
import React from "react";
import Navlogo from "./Navlogo";

export default function Header() {
  
    return (
        <>
            <nav className=" relative py-2 px-4 flex items-center justify-between shadow-md ">
               <Navlogo />
                <Navlinks />                
                <HamburgerMenu  />
                <div className="hidden md:flex">
                </div>
            </nav>
        </>
    )
}


