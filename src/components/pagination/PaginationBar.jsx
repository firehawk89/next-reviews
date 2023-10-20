import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import PaginationLink from "./PaginationLink";

export default function PaginationBar({ href, pageCount, page }) {
  return (
    <div className="flex gap-2 pb-3">
      <PaginationLink href={`${href}?page=${page - 1}`} disabled={page === 1}>
        <ChevronLeftIcon className="h-5 w-5" />
        <span className="sr-only">Previous Page</span>
      </PaginationLink>
      <span>
        Page {page} of {pageCount}
      </span>
      <PaginationLink
        href={`${href}?page=${page + 1}`}
        disabled={page === pageCount}
      >
        <ChevronRightIcon className="h-5 w-5" />
        <span className="sr-only">Next Page</span>
      </PaginationLink>
    </div>
  );
}
