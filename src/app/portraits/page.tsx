"use client";

import Link from "next/link";
import Image from 'next/image'

export default function portraitsPage() {
  return (
    <main className="bg-zinc-50">
      < div className="m-8 grid grid-cols-1 sm:grid-cols-3" >
        <Image src="/images/portraits/EPIC1815.jpg" alt="Lynn Chen" width={4160} height={6240} />
      </div >
    </main >
  )
}
