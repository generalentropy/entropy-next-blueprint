# Entropy Next Blueprint 🌀

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/) [![React](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev/) [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/) [![React Query](https://img.shields.io/badge/-React%20Query-FF4154?logo=react%20query&logoColor=white)](https://tanstack.com/query/latest) [![pnpm](https://img.shields.io/badge/pnpm-%23f69220?logo=pnpm&logoColor=white)](https://pnpm.io/) [![License](https://img.shields.io/badge/License-MIT-green)](./LICENSE)

🚀 Kickstart your **Next.js 16** project in minutes.

A modern starter powered by **TypeScript, Tailwind 4, shadcn, Prisma, React Query, and more**.

---

## 🛠 Tech Stack

- **Next.js 16**
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **shadcn/ui**
- **Prisma (6)**
- **React Query**
- **Zod**
- **ESLint & Prettier**
- **Zustand**
- **Lucide Icons**
- **next-themes**
- **Motion/react**

---

## ✨ Cool Features Included

- 🔀 Automatic Tailwind class sorting with Prettier plugin
- ✅ Pre-configured ESLint & strict TypeScript
- 🎨 Ready-to-use shadcn/ui components
- 🗂 Zustand boilerplate store with persistence
- 🌗 Prebuilt theme switcher component
- 📊 Pre-installed React Query + Devtools + ESLint plugin
- 🛠 Basic utilities (fetcher, date formatter, sleep, etc.)
- 🧩 Extra hooks with `usehooks-ts`
- 🚦 Middleware file included and ready for customization

---

## 🚀 Quick Start

## Install [pnpm](https://pnpm.io/) (if not already installed)

### Install dependencies

```bash
pnpm install
```

### (Optional) Initialize Prisma -> Delete the existing root prisma folder first

```bash
pnpm prisma init
```

### (Optional) Generate the Prisma client

```bash
pnpm prisma generate
```

### Start the development server

```bash
pnpm dev
```

✅ All set, you’re ready to code 🚀

---

## ⚠️ Windows ARM Note

If you are developing on **Windows ARM**, Prisma may fail with the default engine.  
To fix this, add the following line to your `.env` file:

```env
PRISMA_CLIENT_ENGINE_TYPE=binary
```

## 📖 Documentation

- [GitHub Repository](https://github.com/generalentropy/entropy-next-blueprint)
