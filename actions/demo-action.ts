"use server";

export async function testServerAction() {
  // Simulate some work
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    success: true,
    message: "Server action executed successfully!",
  };
}
