"use client";

import { useState } from "react";
import { toast } from "sonner";
import { testServerAction } from "@/actions/demo-action";
import { Button } from "./ui/button";
import { LoaderIcon } from "lucide-react";

export default function TestAction() {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const result = await testServerAction();
      toast.success(result.message);
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleClick}
      disabled={loading}
      className="min-w-40 cursor-pointer disabled:opacity-50"
    >
      {loading ? <LoaderIcon className="animate-spin" /> : "Test Server Action"}
    </Button>
  );
}
