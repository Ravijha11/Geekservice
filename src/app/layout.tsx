import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "Geek Services | Tech & Appliance Help",
  description: "Get expert tech and appliance help for computers, printers, smart home, and more. Book your appointment or contact us for quick support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-serif bg-white text-neutral-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
