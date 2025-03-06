import Link from "next/link";

export default function Navlinks() {
    return (
        <ul className="md:flex justify-between font-bold text-blue-900  gap-5 hidden">
            <li className="hover:text-yellow-400 py-6 active"><Link href="/">Home</Link></li>
            <li className="hover:text-yellow-400 py-6"><Link href="/about-us">About Us</Link></li>
            <li className="hover:text-yellow-400 py-6"><Link href="/restaurant">Restaurant</Link></li>
            <li className="hover:text-yellow-400 py-6"><Link href="/accomodation">Accomodation</Link></li>
            <li className="hover:text-yellow-400 py-6"><Link href="/amenities">Amenities</Link></li>
            <li className="hover:text-yellow-400 py-6"><Link href="/bookings">Bookings</Link></li>
            <li className="hover:text-yellow-400 py-6"><Link href="/blog">Blog</Link></li>
            <li className="hover:text-yellow-400 py-6"><Link href="/real-estate">Real Estate</Link></li>
            <li className="hover:text-yellow-400 py-6"><Link href="/contacts">Contact Us</Link></li>
        </ul>
    )
}