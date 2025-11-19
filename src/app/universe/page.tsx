import PhotoTemplate from "@/components/ui/photoTemplate";

export default function UniversePage() {
  return (
    <main className="bg-zinc-950">
      < div className="m-8" >
        <PhotoTemplate
          hero="/images/universe/IC-1396.jpg"
          leftColumn={[
            "/images/universe/M33.jpg",
            "/images/universe/NGC-7000.jpg",
          ]}
          rightColumn={[
            "/images/universe/IC-1396.jpg",
            "/images/universe/star2.jpg",
          ]}
        />
      </div >
    </main >
  );
}
