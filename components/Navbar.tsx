import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="w-full text-md content-center sticky p-10 flex justify-between">
        <div className="flex gap-4">
            <Link target="_blank" href="https://www.instagram.com/bakshionfilms/">
                Home
            </Link>
            <Link href="https://www.instagram.com/bakshionfilms/">
                About
            </Link>
        </div>
        <div className="">
            <Link target="_blank" href="https://www.instagram.com/bakshionfilms/">
                bakshionfilms
            </Link>
        </div>
    </nav>
  )
}
