import Link from "next/link";

export default function Navlinks() {
    return (
        <ul className="md:flex justify-between text-white  gap-5 hidden text-xs">
            <li className="hover:text-[#61A60e] py-6 active"><Link href="/">Home</Link></li>
            <li className="hover:text-[#61A60e] py-6"><Link href="/about-us">About Us</Link></li>
            <li className="hover:text-[#61A60e] py-6"><Link href="/restaurant">Restaurant</Link></li>
            <li className="hover:text-[#61A60e] py-6"><Link href="/accomodation">Accomodation</Link></li>
            <li className="hover:text-[#61A60e] py-6"><Link href="/amenities">Amenities</Link></li>
            <li className="hover:text-[#61A60e] py-6"><Link href="/bookings">Bookings</Link></li>
            <li className="hover:text-[#61A60e] py-6"><Link href="/blog">Blog</Link></li>
            <li className="hover:text-[#61A60e] py-6"><Link href="/real-estate">Real Estate</Link></li>
            <li className="hover:text-[#61A60e] py-6"><Link href="/contacts">Contact Us</Link></li>
        </ul>
    )
}