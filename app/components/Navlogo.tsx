import Image from "next/image";
import Link from "next/link"
import tGreenslogo from "../../public/logo.png";
export default function Navlogo() {
    return (
            <div className="">
            <Link href="/">
                <Image src={tGreenslogo} alt="Thika Greens Golf logo" width={100} height={100} className="w-18 h-18" />
            </Link>
            </div>
    )
}