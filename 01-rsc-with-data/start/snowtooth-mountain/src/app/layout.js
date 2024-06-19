import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create A New Next App with Cascadia",
  description: "Generated with a workshop in CascadiaJs 2024",
};

function Header() {
  return (
    <header>
      <div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/cascadia">Attendees</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/hotels">Hotels</Link>
        </nav>
      </div>
    </header>
  )
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}</body>
    </html>
  );
}
