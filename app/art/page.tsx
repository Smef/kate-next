import art from "@/assets/art";
import Link from "next/link";
import Image from "next/image";

const paintings = art.filter((piece) => piece.type === "painting");
const sculptures = art.filter((piece) => piece.type === "sculpture");

const groups = [
  {
    title: "Sculptures",
    pieces: sculptures,
  },
  {
    title: "Paintings",
    pieces: paintings,
  },
];

export default function Art() {
  return (
    <div>
      <div className="space-y-12">
        {groups.map((group) => (
          <div key={group.title}>
            <h2 className="w-48 border-b-5 border-green-700 text-2xl">{group.title}</h2>
            <div className="grid place-items-center gap-8 pt-12 lg:grid-cols-2 lg:gap-16 xl:grid-cols-3">
              {group.pieces.map((piece) => (
                <Link key={piece.slug} href={`/art/${piece.slug}`} className={"cursor-pointer p-8 " + piece.frameColor}>
                  <Image src={piece.thumb} alt={piece.alt} width="320" height="320" />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
