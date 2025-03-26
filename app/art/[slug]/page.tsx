import Piece from "@/types/Piece";
import art from "@/assets/art";
import Image from "next/image";

import testImageSrc from "@/assets/art/cliffside.webp";

// handle identifying all the slugs for a static build
export async function generateStaticParams() {
  const pieceRoutes = art.map((piece: Piece) => ({
    slug: piece.slug,
  }));

  return pieceRoutes;
}

// page component
export default async function ArtPiece({
  params,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { slug } = await params;
  const piece = art.find((piece: Piece) => piece.slug === slug);
  // If the piece is not found, return a 404 page
  if (!piece) {
    return <div>404 - Art Piece Not Found</div>;
  }

  return (
    <div className={`rounded-lg p-4 ${piece.frameColor}`}>
      <div className="bg-white">
        <div className="flex justify-center p-4 lg:p-12">
          <a href={piece.mainImage.src} aria-label="Open full size image" className="overflow-hidden rounded-lg">
            <Image src={piece.mainImage} alt={piece.alt} className="max-h-[500px] object-contain" />
          </a>
        </div>
        <div className="p-8">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">{piece.title}</h1>
          <p className="text-lg text-gray-600">{piece.description}</p>
        </div>
      </div>
    </div>
  );
}
