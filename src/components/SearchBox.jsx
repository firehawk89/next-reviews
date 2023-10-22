"use client";

import { useEffect, useState } from "react";
import { searchReviews } from "@/utils";
import { useRouter } from "next/navigation";
import { Combobox } from "@headlessui/react";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [reviews, setReviews] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (query.length > 1) {
      (async () => {
        const reviews = await searchReviews(query);
        setReviews(reviews);
      })();
    } else {
      searchReviews([]);
    }
  }, [query]);

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
