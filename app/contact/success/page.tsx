import Link from "next/link";

export default function Success() {
  return (
    <div className="gap-12 sm:flex">
      <div className="sm:w-1/4">
        <h2 className="pb-2 text-2xl">Now we wait!</h2>

        <div className="bg-pink mb-6 h-2 w-40 md:w-60" />

        <p className="pb-16 font-serif text-xl">Kate will get back to you, soon!</p>
      </div>

      <div className="bg-ice text-cerulean p-56 text-center text-2xl">
        <p>Yay, Success!</p>

        <br />

        <Link href="/" className="text-cerulean text-lg underline">
          Go Home
        </Link>
      </div>
    </div>
  );
}
