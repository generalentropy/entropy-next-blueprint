import Hero from "@/components/Hero";
import { sleep } from "@/utils";

export default function Home() {
  return (
    <div className="my-6 flex items-center justify-center px-2 sm:my-20">
      <Hero />
    </div>
  );
}
