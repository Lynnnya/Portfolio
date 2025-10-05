"use client";

import Link from "next/link";
import Image from 'next/image'

export default function worldPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-zinc-950">
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3">
        <Image src="/images/EPIC0272-2.jpg" alt="UTD Tower" className="w-full h-full object-cover" />
      </div>

    </main>
  )
}
