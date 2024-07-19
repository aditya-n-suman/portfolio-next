import About from "@/components/about";
import Home from "@/components/home";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="font-sans text-slate">
      <Home />
      <About />
    </main>
  );
}
