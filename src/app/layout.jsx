import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { exo2, orbitron } from "./fonts";
import "@/app/globals.css";

export const metadata = {
  title: "Reviews App",
  description: "Discover and share the reviews of hundreds of indie games.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${exo2.variable} ${orbitron.variable}`}>
      <body className="font-default bg-orange-50 flex min-h-screen flex-col">
        <Header />
        <main className="flex-auto py-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
