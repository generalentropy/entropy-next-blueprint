"use client";

import { toast } from "sonner";
import { Button } from "./ui/button";

export default function DemoToast() {
  return (
    <Button
      onClick={() => toast.success("Toasted 🍞")}
      className="cursor-pointer bg-teal-500 px-4 py-2 text-white hover:bg-teal-600 disabled:opacity-50"
    >
      Test Toast
    </Button>
  );
}
