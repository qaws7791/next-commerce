import { z } from "zod";

export const clientEnvSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string(),
});

const clientEnv = clientEnvSchema.parse({
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export default clientEnv;
