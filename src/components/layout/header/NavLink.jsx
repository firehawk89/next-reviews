"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink({ children, href, prefetch }) {
  const pathName = usePathname();

  if (href === pathName) {
    return <span className="text-orange-800">{children}</span>;
  }

  return (
    <Link
      className="text-orange-800 hover:underline"
      href={href}
      prefetch={prefetch}
    >
      {children}
    </Link>
  );
}
