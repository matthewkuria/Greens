import Image from "next/image";
import Link from "next/link"
import tGreenslogo from "../../public/logo.png";
export default function Navlogo() {
    return (
            <div className="">
            <Link href="/">
                <Image src={tGreenslogo} alt="NCMI logo" width={100} height={100} className="w-20 h-20" />
            </Link>
            </div>
    )
}