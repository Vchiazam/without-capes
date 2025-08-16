import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Without Capes - Nurturing Young Hearts into Everyday Heroes",
  description:
    "Without Capes is a movement dedicated to raising kind, empathetic, and responsible children. Since 2022, we've worked with parents, educators, guardians, and governments to design products, toolkits, and tours that build character and inspire everyday heroism—proving kids don't need capes or superpowers to change the world.",
  keywords: [
    "Without Capes",
    "Nurturing Young Hearts",
    "character education for kids",
    "raising kind children",
    "empathy and responsibility",
    "parenting support",
    "teaching kindness",
    "educational toolkits",
    "values-based learning",
    "everyday superheroes",
  ],
  openGraph: {
    title: "Without Capes - Nurturing Young Hearts into Everyday Heroes",
    description:
      "Helping children grow into kind, loving, and responsible humans through character-building products, toolkits, and tours. True heroism lies in everyday acts of love and empathy.",
    url: "https://without-capes.vercel.app/",
    siteName: "Without Capes",
    images: [
      {
        url: "/Hero.png",
        width: 1200,
        height: 630,
        alt: "Without Capes - Nurturing Young Hearts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Without Capes - Nurturing Young Hearts into Everyday Heroes",
    description:
      "Building a better tomorrow by raising kind, empathetic kids. Since 2022, Without Capes has inspired children through products, tours, and toolkits for everyday heroism.",
    images: ["/Hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="preload"
          href="/SakerSansBoldPERSONALUSE.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <div className="max-w-[1700px] mx-auto">{children}</div>
      </body>
    </html>
  );
}
