import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <p className="text-8xl font-black">404</p>
        <p className="text-muted-foreground text-3xl font-medium tracking-tight">
          Not found
        </p>
        <Button asChild className="my-4">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
