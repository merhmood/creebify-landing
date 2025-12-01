import type { Metadata } from "next";
import { Josefin_Sans, Jost } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
  weight: ["400", "700"],
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost-sans",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Creebify",
  description:
    "Live, connect, grow in affordable coliving spaces across Abuja & Lagos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={`${josefinSans.variable} ${jost.variable} `}>
        {children}
      </body>
    </html>
  );
}
