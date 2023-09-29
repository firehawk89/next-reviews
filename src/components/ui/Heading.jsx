import { orbitron } from "@/app/fonts";

export default function Heading({ children }) {
  return (
    <h1 className={`${orbitron.className} font-bold text-2xl mb-3`}>
      {children}
    </h1>
  );
}
