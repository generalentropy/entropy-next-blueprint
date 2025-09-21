import Link from "next/link";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import ThemeToggle from "./ThemeToggle";
import { Github } from "lucide-react";
import DemoToast from "./Test-toast";
import TestAction from "./Test-action";

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
        <Badge className="rounded-full border px-3 py-1">Motion</Badge>
        <Badge className="rounded-full border px-3 py-1">Slugify</Badge>
      </ul>

      <div className="mt-6 flex flex-col items-center gap-3">
        <p className="text-lg font-semibold">✨ Cool Features Included</p>
        <ul className="text-muted-foreground space-y-1">
          <li>Automatic class sorting with Prettier plugin</li>
          <li>Pre-configured ESLint & strict TypeScript</li>
          <p>Pre-installed react Query eslint + Devtool </p>
          <li>Ready-to-use shadcn/ui components</li>
          <li>Zustand boilerplate store with persistence</li>
          <li>Prebuilt theme switcher component</li>
          <li>Basic utilities</li>
          <li>
            Extra hooks with{" "}
            <a href="https://github.com/juliencrn/usehooks-ts">
              <code>usehooks-ts</code>
            </a>
          </li>
        </ul>
      </div>

      <div className="flex justify-center">
        <Button asChild size="lg">
          <Link
            href="https://github.com/generalentropy/entropy-next-blueprint"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="mr-1 h-5 w-5" />
            Use this template
          </Link>
        </Button>
      </div>

      <div className="space-y-2 text-sm">
        <p>
          👉 Install dependencies:{" "}
          <code className="bg-muted rounded px-2 py-0.5">pnpm install</code>
        </p>
        <p>
          👉 (Optional) Initialize Prisma:{" "}
          <code className="bg-muted rounded px-2 py-0.5">pnpm prisma init</code>
        </p>
        <p>
          👉 (Optional) Generate the Prisma client:{" "}
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

      <div className="mt-6">
        <ThemeToggle />
      </div>

      <div className="flex gap-4">
        <TestAction />
        <DemoToast />
      </div>
    </section>
  );
}
