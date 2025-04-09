import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="w-full bg-white h-[7rem] flex">
      <div className="container mx-auto flex justify-center items-center p-6">
        <Link href="/" className="flex items-center">
          <div className="flex items-center">
            <Image src="/woodard-logo.svg" alt="Woodard AI Logo" width={220} height={41} />
          </div>
        </Link>
      </div>
    </header>
  )
}