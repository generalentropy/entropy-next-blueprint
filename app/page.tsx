import Hero from "@/components/Hero";
import { sleep } from "@/utils";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Hero />
    </div>
  );
}
