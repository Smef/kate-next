import type { Metadata } from "next";
import "@/assets/app.css";
import NavBar from "@/components/NavBar";
import { League_Spartan, Metal, Gloria_Hallelujah } from "next/font/google";
import ContentWidthContainer from "@/components/ContentWidthContainer";

export const metadata: Metadata = {
  title: "Kate O. Nahodyl, Artist",
  description:
    "Kate O. Nahodyl (she/her) is an Atlanta-area artist who uses acrylic and mixed media to create vibrant paintings in a style she refers to as 'Illustrated Impressionism.'",
};

// fonts

const league_spartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
  display: "swap",
});

const metal = Metal({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-metal",
  display: "swap",
});

const gloria_hallelujah = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-gloria-hallelujah",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${league_spartan.variable} ${metal.variable} ${gloria_hallelujah.variable}`}>
      <head>
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="keywords" content="fine art, acrylic, artist, Atlanta` Artist" />
        <meta name="author" content="Kate O. Nahodyl" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </head>
      <body className={``}>
        <NavBar />
        <ContentWidthContainer>{children}</ContentWidthContainer>
      </body>
    </html>
  );
}
