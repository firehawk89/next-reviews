import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import "@/app/globals.css";
import Footer from "@/components/layout/Footer";
import { orbitron } from "./fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reviews App",
  description: "Discover and share the reviews of hundreds of indie games.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={orbitron.variable}>
      <body
        className={`${inter.className} bg-orange-50 flex min-h-screen flex-col`}
      >
        <Header />
        <main className="flex-auto py-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
