import Link from "next/link";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import ThemeToggle from "./ThemeToggle";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 text-center">
      <h1 className="flex flex-col gap-3 text-4xl font-bold tracking-tight">
        <span>Welcome to Entropy-Next-Blueprint</span>
      </h1>

      <p className="text-xl font-bold">
        🚀 Kickstart your Next.js project in minutes.
      </p>

      <p className="text-muted-foreground max-w-xl text-lg">
        A modern starter for Next.js 15 - TypeScript, Tailwind 4, shadcn,
        Prisma, React Query, and more.
      </p>

      {/* Tech stack badges */}
      <ul className="text-muted-foreground flex max-w-xl flex-wrap justify-center gap-2 text-sm">
        <Badge className="rounded-full border px-3 py-1">Next.js 15</Badge>
        <Badge className="rounded-full border px-3 py-1">React 19</Badge>
        <Badge className="rounded-full border px-3 py-1">TypeScript</Badge>
        <Badge className="rounded-full border px-3 py-1">Tailwind 4</Badge>
        <Badge className="rounded-full border px-3 py-1">shadcn/ui</Badge>
        <Badge className="rounded-full border px-3 py-1">Prisma</Badge>
        <Badge className="rounded-full border px-3 py-1">React Query</Badge>
        <Badge className="rounded-full border px-3 py-1">Zod</Badge>
        <Badge className="rounded-full border px-3 py-1">ESLint</Badge>
        <Badge className="rounded-full border px-3 py-1">Prettier</Badge>
        <Badge className="rounded-full border px-3 py-1">Zustand</Badge>
        <Badge className="rounded-full border px-3 py-1">Lucide Icons</Badge>
        <Badge className="rounded-full border px-3 py-1">next-themes</Badge>
      </ul>

      {/* Cool features */}
      <div className="mt-6 flex flex-col items-center gap-3">
        <p className="text-lg font-semibold">✨ Cool Features Included</p>
        <ul className="text-muted-foreground space-y-1">
          <li>Automatic class sorting with Prettier plugin</li>
          <li>Pre-configured ESLint & strict TypeScript</li>
          <li>Ready-to-use shadcn/ui components</li>
          <li>Zustand boilerplate store with persistence</li>
          <li>Prebuilt theme switcher component</li>
        </ul>
      </div>
      {/* Quick start */}
      <div className="mt-4 space-y-2 text-sm">
        <p>
          👉 Install dependencies:{" "}
          <code className="bg-muted rounded px-2 py-0.5">pnpm install</code>
        </p>
        <p>
          👉 (Optional) Initialize Prisma:{" "}
          <code className="bg-muted rounded px-2 py-0.5">pnpm prisma init</code>
        </p>
        <p>
          👉 Generate the Prisma client:{" "}
          <code className="bg-muted rounded px-2 py-0.5">
            pnpm prisma generate
          </code>
        </p>
        <p>
          👉 Start the dev server:{" "}
          <code className="bg-muted rounded px-2 py-0.5">pnpm dev</code>
        </p>
        <p className="mt-3 text-lg font-semibold">
          ✅ All set, you’re ready to code 🚀
        </p>
      </div>

      <div className="mt-8 flex gap-4">
        <Button asChild>
          <Link href="/docs">Get Started</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="https://github.com/your-username/entropy-next-blueprint">
            GitHub
          </Link>
        </Button>
      </div>

      <div className="mt-6">
        <ThemeToggle />
      </div>
    </section>
  );
}
