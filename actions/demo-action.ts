"use server";

import { sleep } from "@/utils";

export async function testServerAction() {
  // Simulate some work
  await sleep(200);

  return {
    success: true,
    message: "Server action executed successfully!",
  };
}
