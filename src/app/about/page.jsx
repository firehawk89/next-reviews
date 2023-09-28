"use client";

import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    window.alert("Hello, world!");
    console.log("Hello, world!");
  }, []);

  return (
    <div>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
        adipisci voluptatibus ea, omnis eius enim ullam aliquid? Itaque eligendi
        sint dignissimos fuga, doloribus optio ducimus asperiores necessitatibus
        modi commodi magni.
      </p>
    </div>
  );
}
