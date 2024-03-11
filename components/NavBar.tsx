import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import MaxWidthWrapper from "./MaxWidthWrapper";


export default function NavBar() {
    return(
        <MaxWidthWrapper>
        <nav className="w-full relative flex items-center justify-between mx-auto px-12 py-5">
            <Link href="/" className="font-bold text-2xl">
                Niko<span className="text-primary">las</span>
            </Link>

            <div>
                <Link href="/">
                    Item
                </Link>
            </div>

            <ModeToggle />
        </nav>
        </MaxWidthWrapper>
    )
}