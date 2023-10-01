"use client";

import { useState } from "react";
import { LinkIcon } from "@heroicons/react/20/solid";

export default function ShareLink() {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    setTimeout(() => setClicked(false), 1500);
  };

  return (
    <button
      className="flex gap-1 items-center border px-2 py-1 rounded text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700 transition-all"
      onClick={clickHandler}
    >
      <LinkIcon className="h-4 w-4" />
      {clicked ? "Link Copied" : "Share Link"}
    </button>
  );
}
