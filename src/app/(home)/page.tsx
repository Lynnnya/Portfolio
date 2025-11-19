"use client";

import Link from 'next/link';
import ImageCarousel from '@/components/ui/imageCarousel';
import { useEffect, useState } from 'react';

const portraitGallery = [
  '/images/landingPage/portraits/EPIC1815.jpg',
  '/images/landingPage/portraits/EPIC0818-2.jpg',
  '/images/landingPage/portraits/EPIC0493-3.jpg',
];
const worldGallery = [
  '/images/landingPage/world/EPIC0741-2.jpg',
  '/images/landingPage/world/EPIC5097.jpg',
  '/images/landingPage/world/EPIC2902-3.jpg',
];
const universeGallery = [
  '/images/landingPage/universe/IC-1396.jpg',
  '/images/landingPage/universe/NGC-7000.jpg',
  '/images/landingPage/universe/M33.jpg',
];


export default function Landingpage() {
  const [index, setIndex] = useState(0);
  const interval = 2000;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % 3);
    }, interval);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-zinc-50">
      <div className=" mx-8 mb-8 grid grid-cols-1 sm:grid-cols-3">
        <div className='relative group'>
          <ImageCarousel images={portraitGallery} direction="down" />
          <Link href="/portraits" className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-shadow-zinc-50 text-6xl font-semibold">PORTRAITS</span>
          </Link>
          <div className="absolute inset-0 z-0 transition-all duration-300 bg-transparent hover:bg-zinc-950/10 group-hover:backdrop-blur-sm" />
        </div>

        <div className='relative group'>
          <ImageCarousel images={worldGallery} direction="up" />
          <Link href="/world" className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-shadow-zinc-50 text-6xl font-semibold">WORLD</span>
          </Link>
          <div className="absolute inset-0 z-0 transition-all duration-300 bg-transparent hover:bg-zinc-950/10 group-hover:backdrop-blur-sm" />
        </div>

        <div className='relative group'>
          <ImageCarousel images={universeGallery} direction="down" />
          <Link href="/universe" className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-shadow-zinc-50 text-6xl font-semibold">UNIVERSE</span>
          </Link>
          <div className="absolute inset-0 z-0 transition-all duration-300 bg-transparent hover:bg-zinc-950/10 group-hover:backdrop-blur-sm" />
        </div>
      </div>
    </main >
  )
}
