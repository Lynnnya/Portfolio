"use client";

import Link from "next/link";
import Image from 'next/image'

export default function universePage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-zinc-950">
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3">
        <Image src="/images/NGC-7000-Meow.jpg" alt="NGC 7000" className="w-full h-full object-cover" />
      </div>

    </main>
  )
}
