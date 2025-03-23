import Link from "next/link";
import Image from "next/image";
import Bars3Icon from "./Bars3Icon";
import kate from "@/assets/images/kate.png";
import ContentWidthContainer from "./ContentWidthContainer";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function NavBar() {
  return (
    <header>
      <ContentWidthContainer>
        <nav className="flex items-center justify-between pt-6 pb-6 lg:pb-12" aria-label="Global">
          <Link href="/" className="flex items-center gap-6">
            <Image
              className="h-12 w-auto"
              src={kate}
              height="48"
              width="48"
              alt="A digital image created by and of the artist"
            />
            <div className="flex flex-col">
              <p className="text-xl md:text-2xl">Kate O. Nahodyl</p>
              <p className="font-serif text-base leading-tight md:text-lg">Artist</p>
            </div>
          </Link>
          <div className="flex md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              // @click="mobileMenuOpen = true"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 fill-black" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden md:flex md:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-xl leading-6 text-black">
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </ContentWidthContainer>
    </header>
  );
}
