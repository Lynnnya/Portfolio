import Image from 'next/image';

export default function PhotoTemplate({
    hero,
    leftColumn,
    rightColumn,
}: {
    hero: string;
    leftColumn: string[];
    rightColumn: string[];
}) {
    return (
        <div className="space-y-8">
            {/* Hero */}
            <div className="relative w-full aspect-[3/2]">
                <Image src={hero} fill alt="" className="object-cover" />
            </div>

            {/* Two-column layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Column images={leftColumn} />
                <Column images={rightColumn} />
            </div>
        </div>
    );
}

function Column({ images }: { images: string[] }) {
    return (
        <div className="space-y-4">
            {images.map((src, i) => (
                <div key={i} className="relative w-full aspect-[3/2]">
                    <Image src={src} fill alt="" className="object-cover" />
                </div>
            ))}
        </div>
    );
}
