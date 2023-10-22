"use client";

import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useRouter } from "next/navigation";
import { Combobox } from "@headlessui/react";

export default function SearchBox() {
  const [reviews, setReviews] = useState([]);
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 300);
  const router = useRouter();

  useEffect(() => {
    if (debouncedQuery.length > 1) {
      const controller = new AbortController();

      (async () => {
        const url = "/api/search?query=" + encodeURIComponent(debouncedQuery);

        const response = await fetch(url, { signal: controller.signal });
        const reviews = await response.json();

        setReviews(reviews);
      })();

      return () => controller.abort();
    } else {
      setReviews([]);
    }
  }, [debouncedQuery]);

  const handleComboboxChange = (review) => {
    router.push(`/reviews/${review.slug}`);
  };

  return (
    <div className="relative w-48">
      <Combobox onChange={handleComboboxChange}>
        <Combobox.Input
          placeholder="Search..."
          className="px-2 py-1 border rounded w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Combobox.Options className="absolute bg-white py-1 w-full">
          {reviews.map((review) => (
            <Combobox.Option key={review.slug} value={review}>
              {({ active }) => (
                <span
                  className={`block px-2 truncate ${
                    active ? "cursor-pointer bg-orange-100" : ""
                  }`}
                >
                  {review.title}
                </span>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </div>
  );
}
