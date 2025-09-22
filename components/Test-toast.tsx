"use client";

import { toast } from "sonner";
import { Button } from "./ui/button";

export default function DemoToast() {
  return (
    <Button
      onClick={() => toast.success("Toasted 🍞")}
      className="cursor-pointer disabled:opacity-50"
    >
      Test Toast
    </Button>
  );
}
