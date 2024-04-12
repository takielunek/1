import type { Metadata } from "next";
import "./globals.css";
import HeaderTop from "../components/HeaderTop";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Next App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <HeaderTop />
      <Header />
      <Navbar />
      <p>{children}</p>
      <Footer />
    </html>
  );
}
