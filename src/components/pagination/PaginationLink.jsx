import Link from "next/link";

export default function PaginationLink({ children, href, disabled }) {
  if (disabled) {
    return (
      <span className="cursor-not-allowed border rounded text-slate-300 text-sm">
        {children}
      </span>
    );
  }

  return (
    <Link
      className="border rounded text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700"
      href={href}
    >
      {children}
    </Link>
  );
}
