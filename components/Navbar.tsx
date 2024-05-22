import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="w-full text-md content-center sticky p-10 flex justify-between">
        <div className="flex gap-4">
            <Link href="/">
                Home
            </Link>
            <Link href="/about">
                About
            </Link>
        </div>
        <div className="">
            <Link href="/">
                Sunanda Samanta
            </Link>
        </div>
    </nav>
  )
}
