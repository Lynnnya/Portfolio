import Link from "next/link";
import Image from 'next/image'

export default function worldPage() {
  return (
    <main className="bg-zinc-50">
      < div className="mx-8 mb-8 grid grid-cols-1 sm:grid-cols-3" >
        <Image src="/images/world/EPIC5097.jpg" alt="" width={4160} height={6240} />
      </div >
    </main >
  )
}
