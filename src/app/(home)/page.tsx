import Link from 'next/link';
import Image from 'next/image';

import PortraitGa from '@/images/landingPage/portraits/EPIC1815.jpg';
import WorldGa from '@/images/landingPage/world/EPIC0741-2.jpg';
import UniverseGa from '@/images/landingPage/universe/NGC-7000.jpg';

export default function Landingpage() {
  return (
    <main className="bg-zinc-950">
      <div className=" mx-8 grid grid-cols-1 sm:grid-cols-3">
        <Link href="/portraits" className="">
          <Image src={PortraitGa} alt="Portraits Gallary" />
        </Link>
        <Image src={WorldGa} alt="Lynn Chen" />
        <Image src={UniverseGa} alt="Lynn Chen" />
      </div>
    </main>
  )
}
