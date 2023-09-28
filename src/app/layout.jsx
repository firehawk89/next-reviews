import "@/app/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reviews App",
  description: "Discover and share the reviews of hundreds of indie games.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <header className="text-center p-4">Header</header>
        <main className="flex-auto p-4">{children}</main>
        <footer className="text-center p-4">Footer</footer>
      </body>
    </html>
  );
}
