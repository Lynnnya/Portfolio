'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
    images: string[];
    aspectRatio?: string;
    interval?: number;
    direction?: 'up' | 'down';
    index?: number; // <-- new
}

export default function ImageCarousel({
    images,
    aspectRatio = '2/3',
    interval = 7000,
    direction = 'up',
    index: externalIndex,
}: ImageCarouselProps) {
    const [localIndex, setLocalIndex] = useState(0);
    const index = externalIndex ?? localIndex; // use external if provided

    useEffect(() => {
        if (externalIndex !== undefined) return; // parent controls it
        const timer = setInterval(() => {
            setLocalIndex((prev) => (prev + 1) % images.length);
        }, interval);
        return () => clearInterval(timer);
    }, [images.length, interval, externalIndex]);

    const dirMultiplier = direction === 'up' ? -1 : 1;

    return (
        <div className="relative w-full overflow-hidden" style={{ aspectRatio }}>
            <div className="relative w-full h-full">
                <AnimatePresence initial={false}>
                    <motion.div
                        key={index}
                        initial={{ y: `${100 * dirMultiplier}%`, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: `${-100 * dirMultiplier}%`, opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute top-0 left-0 w-full h-full"
                    >
                        <Image
                            src={images[index % images.length]}
                            alt={`Image ${index + 1}`}
                            fill
                            className="object-cover w-full h-full"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
