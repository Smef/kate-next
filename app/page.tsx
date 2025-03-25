import Image from "next/image";
import Link from "next/link";
import KateAndRedhead from "@/assets/images/home/kate-and-redhead-2.jpg";

export default function Home() {
  return (
    <div className="mx-auto flex flex-col justify-center gap-12 lg:flex-row">
      <div className="flex-none bg-green-700 p-4">
        <div className="flex justify-center">
          <Image
            src={KateAndRedhead}
            className=""
            alt="A red panda bust on the left and Kate on the right."
            width="428"
            height="500"
          />
        </div>
        <div className="font-script pt-6 text-center text-4xl text-white">KATE! & Redhead 2</div>
        <div className="font-script pt-2 pb-6 text-center text-sm text-white">(In the studio)</div>
      </div>
      <div>
        <h1 className="border-b-cerulean-700 border-b-4 text-4xl text-balance">
          Kate is an Artist / Instructor in Atlanta
        </h1>
        <div className="space-y-8 pt-12 text-3xl">
          <Link href="/art" className="block bg-green-200 p-3 pt-4 hover:bg-green-300">
            Browse the Art{" "}
          </Link>
          <a
            target="_blank"
            className="bg-ice-200 hover:bg-ice-300 block p-3 pt-4"
            href="https://www.itstheartcenter.org/service-page/h-spr-kate-n-wed-pm-clay-sculpture?referral=service_list_widget"
          >
            Take a Class with Kate
          </a>
          <a
            target="_blank"
            className="block bg-red-100 p-3 pt-4 hover:bg-red-200"
            href="https://www.twitch.tv/kratykat"
          >
            Watch on Twitch
          </a>
          <a
            target="_blank"
            className="block bg-yellow-500 p-3 pt-4 hover:bg-yellow-600"
            href="https://buymeacoffee.com/kraty"
          >
            Support the Artist
          </a>
        </div>
      </div>
    </div>
  );
}
