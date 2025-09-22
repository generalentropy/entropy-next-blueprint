import Link from "next/link";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import ThemeToggle from "./ThemeToggle";
import { BadgeCheck } from "lucide-react";
import DemoToast from "./Test-toast";
import TestAction from "./Test-action";
import { Separator } from "./ui/separator";

const techStack = [
  "Next.js 15",
  "React 19",
  "TypeScript",
  "Tailwind 4",
  "shadcn/ui",
  "Prisma",
  "React Query",
  "Zod",
  "ESLint",
  "Prettier",
  "Zustand",
  "Lucide Icons",
  "next-themes",
  "Motion",
  "Slugify",
];

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 text-center md:gap-8">
      <ThemeToggle />
      <h1 className="flex flex-col gap-3 text-4xl font-black tracking-tight">
        <span>Welcome to Entropy Next Blueprint</span>
      </h1>

      <p className="text-xl font-bold">
        🚀 Kickstart your Next.js project in minutes.
      </p>

      <p className="text-muted-foreground max-w-xl text-lg">
        A modern starter for Next.js 15 - TypeScript, Tailwind 4, shadcn,
        Prisma, React Query, and more.
      </p>

      <TechBadges />

      <div className="bg-muted mt-4 rounded-xl px-6 py-4 text-center">
        <p className="text-muted-foreground text-base font-medium">
          Start faster with a straightforward Next.js setup - nothing more,
          nothing less.
        </p>
      </div>

      <div className="my-3 flex justify-center">
        <Button
          asChild
          size="lg"
          variant="default"
          className="bg-pink-400 shadow-md transition-colors hover:bg-pink-500"
        >
          <Link
            href="https://github.com/generalentropy/entropy-next-blueprint/generate"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Create a new repository from the Entropy Next Blueprint template on GitHub"
          >
            <span>Use this template on GitHub</span>
          </Link>
        </Button>
      </div>

      <div className="flex flex-col items-center gap-3">
        <p className="text-lg font-semibold">✨ Cool features included</p>
        <ul className="text-muted-foreground space-y-1">
          <li>Automatic class sorting with Prettier plugin</li>
          <li>Pre-configured ESLint & strict TypeScript</li>
          <p>Pre-installed react Query eslint + Devtool </p>
          <li>Ready-to-use shadcn/ui components</li>
          <li>Zustand boilerplate example store with persistence</li>
          <li>Prebuilt theme switcher component</li>
          <li>Basic utilities</li>
          <li>
            Extra hooks with{" "}
            <a href="https://github.com/juliencrn/usehooks-ts">
              <code>usehooks-ts</code>
            </a>
          </li>
          <li>Middleware file included and ready for customization</li>
        </ul>
      </div>

      <div className="space-y-2 text-sm">
        <p>
          👉 Install dependencies:{" "}
          <code className="bg-muted rounded px-2 py-0.5">pnpm install</code>
        </p>
        <p>
          👉 Initialize Prisma <span className="italic">(optional)</span> :
          <code className="bg-muted rounded px-2 py-0.5">pnpm prisma init</code>
        </p>
        <p>
          👉 Generate the Prisma client{" "}
          <span className="italic">(optional)</span> :
          <code className="bg-muted rounded px-2 py-0.5">
            pnpm prisma generate
          </code>
        </p>
        <p>
          👉 Start the dev server:{" "}
          <code className="bg-muted rounded px-2 py-0.5">pnpm dev</code>
        </p>
        <p className="mt-5 flex items-center justify-center text-lg font-semibold">
          All set, you’re ready to code{" "}
          <BadgeCheck size={20} className="ml-2 text-green-700" />
        </p>
      </div>

      <Separator />

      <div className="flex gap-4">
        <TestAction />
        <DemoToast />
      </div>
    </section>
  );
}

function TechBadges() {
  return (
    <ul className="text-muted-foreground flex max-w-xl flex-wrap justify-center gap-2 text-sm">
      {techStack.map((tech) => (
        <li key={tech}>
          <Badge className="rounded-full border sm:px-3 md:py-1">{tech}</Badge>
        </li>
      ))}
    </ul>
  );
}
